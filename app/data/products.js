const products = [
  {
    id: 15,
    title: "Wooden Bathroom Sink With Mirror",
    description:
      "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
    category: "furniture",
    price: 799.99,
    discountPercentage: 11.22,
    rating: 3.26,
    images: [
      "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png",
      "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/2.png",
      "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png",
  },
  {
    id: 19,
    title: "Chicken Meat",
    description:
      "Fresh and tender chicken meat, suitable for various culinary preparations.",
    category: "groceries",
    price: 9.99,
    discountPercentage: 10.46,
    rating: 4.61,
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png",
      "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/2.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/thumbnail.png",
  },
  {
    id: 28,
    title: "Ice Cream",
    description:
      "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
    category: "groceries",
    price: 5.49,
    discountPercentage: 7.58,
    rating: 3.77,
    images: [
      "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/1.png",
      "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/2.png",
      "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/3.png",
      "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/4.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png",
  },
  {
    id: 4,
    title: "Red Lipstick",
    description:
      "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    category: "beauty",
    price: 12.99,
    discountPercentage: 19.03,
    rating: 2.51,
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
  },
  {
    id: 5,
    title: "Red Nail Polish",
    description:
      "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    category: "beauty",
    price: 8.99,
    discountPercentage: 2.46,
    rating: 3.91,
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png",
  },
  {
    id: 6,
    title: "Calvin Klein CK One",
    description:
      "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    category: "fragrances",
    price: 49.99,
    discountPercentage: 0.32,
    rating: 4.85,
    images: [
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
  },
  {
    id: 7,
    title: "Chanel Coco Noir Eau De",
    description:
      "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    category: "fragrances",
    price: 129.99,
    discountPercentage: 18.64,
    images: [
      "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/2.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png",
  },
  {
    id: 13,
    title: "Bedside Table African Cherry",
    description:
      "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
    category: "furniture",
    price: 299.99,
    discountPercentage: 9.58,
    rating: 4.48,
    images: [
      "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png",
      "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/2.png",
      "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png",
  },
  {
    id: 14,
    title: "Knoll Saarinen Executive Conference Chair",
    description:
      "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
    category: "furniture",
    price: 499.99,
    discountPercentage: 15.23,
    rating: 4.11,
    images: [
      "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png",
      "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/2.png",
      "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/3.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png",
  },
];

export default products;
