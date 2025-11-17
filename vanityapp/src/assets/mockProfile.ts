// src/data/mockProfile.ts

// This is the same object you had, just in its own file.
export const mockProfileData = {
  name: 'Jane Doe',
  phone: '(123) 456-7890',
  email: 'jane.doe@example.com',
  address: '123 Main St, Anytown, USA, 12345',
  role: 'Admin',
  businessName: 'Design Co. Interiors',
  businessCategory: 'Interior Design',
  orders: [
    { orderId: 'ord456', date: '2025-11-10', total: 949.98, status: 'Delivered' },
    { orderId: 'ord789', date: '2025-11-12', total: 299.99, status: 'Processing' },
    { orderId: 'ord101', date: '2025-11-05', total: 450.00, status: 'Delivered' },
  ],
};