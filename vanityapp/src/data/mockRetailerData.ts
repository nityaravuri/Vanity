// src/data/mockRetailerData.ts

// This data simulates what your MERN API will send
export const mockRetailerProducts = [
  {
    id: 'p1',
    name: 'Plush Velvet Sofa',
    status: 'Live',
    price: 899.99,
    stock: 50,
    sales: 12,
  },
  {
    id: 'p2',
    name: 'Modern Sectional Sofa',
    status: 'Live',
    price: 1299.99,
    stock: 20,
    sales: 5,
  },
  {
    id: 'p3',
    name: 'Hand-Woven Rug',
    status: 'Pending Approval',
    price: 249.99,
    stock: 100,
    sales: 0,
  },
  {
    id: 'p4',
    name: 'Oak Dining Table',
    status: 'Out of Stock',
    price: 799.99,
    stock: 0,
    sales: 22,
  },
];

export const mockCustomerQueries = [
  {
    id: 'q1',
    customerName: 'Alice Smith',
    productName: 'Plush Velvet Sofa',
    date: '2025-11-15',
    query: "Hi, does this sofa come in a dark green color? Also, what's the warranty period?",
    status: 'New',
  },
  {
    id: 'q2',
    customerName: 'Bob Johnson',
    productName: 'Oak Dining Table',
    date: '2025-11-14',
    query: "What are the exact dimensions of this table? I need to know if it fits my space.",
    status: 'Read',
  },
  {
    id: 'q3',
    customerName: 'Charlie Brown',
    productName: 'Modern Sectional Sofa',
    date: '2025-11-13',
    query: 'Is the "Out of Stock" status correct? When will you have more?',
    status: 'Replied',
  },
];

export const mockRetailerOrders = [
  {
    orderId: 'o-123',
    customerName: 'Alice Smith',
    date: '2025-11-15',
    total: 899.99,
    status: 'Pending',
  },
  {
    orderId: 'o-124',
    customerName: 'Charlie Brown',
    date: '2025-11-14',
    total: 1299.99,
    status: 'Pending',
  },
  {
    orderId: 'o-125',
    customerName: 'Bob Johnson',
    date: '2025-11-13',
    total: 799.99,
    status: 'Shipped',
  },
];

export const mockFinanceData = {
  availableBalance: 4250.75,
  pendingBalance: 1299.99,
  nextPayoutDate: '2025-11-20',
  recentTransactions: [
    { id: 'tr-1', date: '2025-11-15', description: 'Payout to bank account', amount: -5000.00, type: 'Payout' },
    { id: 'tr-2', date: '2025-11-14', description: 'Sale (Order o-125)', amount: 799.99, type: 'Sale' },
    { id: 'tr-3', date: '2025-11-13', description: 'Sale (Order o-124)', amount: 1299.99, type: 'Pending' },
    { id: 'tr-4', date: '2025-11-12', description: 'Sale (Order o-123)', amount: 899.99, type: 'Sale' },
  ]
};