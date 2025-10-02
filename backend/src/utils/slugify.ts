// src/utils/slugify.ts
export default function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase() // ছোট হাতের অক্ষর
    .trim() // শুরুর/শেষের ফাঁকা জায়গা সরানো
    .replace(/[\s\_]+/g, "-") // space ও underscore → "-"
    .replace(/[^\w\-]+/g, "") // অক্ষর, সংখ্যা, dash ছাড়া বাকিগুলো সরানো
    .replace(/\-\-+/g, "-") // একাধিক dash → single dash
    .replace(/^-+/, "") // শুরুতে dash থাকলে সরানো
    .replace(/-+$/, ""); // শেষে dash থাকলে সরানো
}
