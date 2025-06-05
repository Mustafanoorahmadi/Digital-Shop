"use server";

import { prisma } from "@/lib/prisma";
import { Product } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getProducts = async () => {
  const result = await prisma.product.findMany({ include: { images: true } });
  return result;
};

export const getProductsAPI = async () => {
  try {
    const result = await fetch('/api/product', {
      next: { revalidate: 30 },
    });
    if (!result.ok) {
      throw new Error('خطا در دریافت محصولات');
    }
    const response = await result.json();
    return response;
  } catch (error) {
    console.error('getProductsAPI error:', error);
    return { data: [], error: error?.message || 'خطای ناشناخته' };
  }
};

export const getProductById = async (id: string) => {
  const result = await prisma.product.findFirst({
    where: { id },
    include: { images: true },
  });
  if (!result) {
    return null;
  }
  return result;
};

export const upsertProduct = async (product: Product) => {
  // اعتبارسنجی داده‌ها
  if (!product.name || typeof product.name !== 'string' || product.name.length < 2) {
    throw new Error('نام محصول معتبر نیست');
  }
  if (!product.category || typeof product.category !== 'string') {
    throw new Error('دسته‌بندی محصول معتبر نیست');
  }
  if (product.price !== undefined && (typeof product.price !== 'number' || product.price < 0)) {
    throw new Error('قیمت محصول معتبر نیست');
  }
  if (product.quantity !== undefined && (typeof product.quantity !== 'number' || product.quantity < 0)) {
    throw new Error('تعداد محصول معتبر نیست');
  }

  const { id } = product;
  let result;
  if (id) {
    result = await prisma.product.update({
      where: {
        id,
      },
      data: product,
    });
  } else {
    result = await prisma.product.create({
      data: product,
    });
  }

  revalidatePath('/dashboard/products')
  return result;
};

export const deleteProduct = async (id: string) => {
  await prisma.product.delete({ where: { id } })
  redirect('/dashboard/products')
}