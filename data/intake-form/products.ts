import type { Product } from "~/types/intake-form/checkout";

// --- PRODUCT DATA ---

// This is the master list of all available products.

export const products: Product[] = [
  {
    id: "nad-plus",
    name: "Nad+",
    category: "wellness",
    description: "NAD+ is a product",
    img: "/assets/images/products/some-product-id-img.png",
    thumbnail: "/assets/images/products/some-product-id-thumbnail.png",
    prices: {
      monthly: 339,
      threeMonthly: 670,
      sixMonthly: 1200
    },
    productBundleIds: {
      monthly: "produmonthy-bundle-id",
      threeMonthly: "produmonawdthy-bundle-id",
      sixMonthly: "produmo231nthy-bundle-id"
    },
    availability: "in_stock",
    type: "injection",
    popular: false,
    features: [],
    quiz: "nad-plus"
  },
  {
    id: "mounjaro-injection",
    name: "Mounjaro Injection",
    category: "weight-loss",
    description: "Weekly GLP-1 injection for weight loss and diabetes management",
    img: "/assets/images/products/mounjaro-injection.png",
    thumbnail: "/assets/images/products/mounjaro-injection.png",
    prices: {
      monthly: 399,
      threeMonthly: 349,
      sixMonthly: 349
    },
    productBundleIds: {
      monthly: "bundle-mounjaro-monthly",
      threeMonthly: "bundle-mounjaro-quarterly",
      sixMonthly: "bundle-mounjaro-semiannual"
    },
    quizId: "glp1-weight-loss",
    popular: true,
    availability: "in_stock",
    type: "injection",
    features: [
      "Weekly subcutaneous injection",
      "GLP-1 receptor agonist",
      "Effective for weight loss",
      "Diabetes management",
      "Prescription required"
    ],
    quiz: null
  },
  {
    id: "ozempic-injection",
    name: "Ozempic Injection",
    category: "weight-loss",
    description: "Weekly GLP-1 injection for weight loss and blood sugar control",
    img: "/assets/images/products/ozempic-injection.png",
    thumbnail: "/assets/images/products/ozempic-injection.png",
    prices: {
      monthly: 399,
      threeMonthly: 349,
      sixMonthly: 349
    },
    productBundleIds: {
      monthly: "bundle-ozempic-monthly",
      threeMonthly: "bundle-ozempic-quarterly",
      sixMonthly: "bundle-ozempic-semiannual"
    },
    quizId: "glp1-weight-loss",
    availability: "in_stock",
    type: "injection",
    features: [
      "Weekly subcutaneous injection",
      "GLP-1 receptor agonist",
      "Weight loss support",
      "Blood sugar control",
      "Prescription required"
    ],
    quiz: null
  },
  {
    id: "methylcobalamin-injection",
    name: "Methylcobalamin Injection",
    category: "energy",
    description: "Vitamin B12 injection for energy and neurological health",
    img: "/assets/images/products/methylcobalamin-injection.png",
    thumbnail: "/assets/images/products/methylcobalamin-injection.png",
    prices: {
      monthly: 399,
      threeMonthly: 349,
      sixMonthly: 349
    },
    productBundleIds: {
      monthly: "bundle-methylcobalamin-monthly",
      threeMonthly: "bundle-methylcobalamin-quarterly",
      sixMonthly: "bundle-methylcobalamin-semiannual"
    },
    quizId: "vitamin-b12",
    availability: "in_stock",
    type: "injection",
    features: [
      "Vitamin B12 supplement",
      "Energy boost",
      "Neurological support",
      "Methylated form for better absorption",
      "Prescription required"
    ],
    quiz: null
  }
];


export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getPopularProducts(): Product[] {
  return products.filter((product) => product.popular);
}

