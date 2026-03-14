export interface InventoryItem {
  id: number;
  name: string;
  sku: string;
  quantity: number;
  unitPrice: number;
  location: string;
  status: 'inStock' | 'low' | 'outOfStock' | 'ordered';
}

export interface WorkOrder {
  id: number;
  title: string;
  product: string;
  quantity: number;
  deadline: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'inProgress' | 'completed';
  assignee: string;
  progress: number;
}

export const inventory: InventoryItem[] = [
  { id: 1, name: 'Čelična ploča 2mm', sku: 'CP-2MM-001', quantity: 1250, unitPrice: 12.50, location: 'Skladište A1', status: 'inStock' },
  { id: 2, name: 'Aluminijski profil L40', sku: 'AP-L40-012', quantity: 340, unitPrice: 28.00, location: 'Skladište A2', status: 'inStock' },
  { id: 3, name: 'Vijak M8x30 (pak.)', sku: 'VJ-M8-030', quantity: 45, unitPrice: 5.20, location: 'Skladište B1', status: 'low' },
  { id: 4, name: 'Brtveni prsten DN50', sku: 'BR-DN50-08', quantity: 0, unitPrice: 3.80, location: 'Skladište B2', status: 'outOfStock' },
  { id: 5, name: 'Hidraulično ulje 10L', sku: 'HU-10L-005', quantity: 28, unitPrice: 45.00, location: 'Skladište C1', status: 'low' },
  { id: 6, name: 'Elektromotor 2.2kW', sku: 'EM-22KW-03', quantity: 12, unitPrice: 320.00, location: 'Skladište D1', status: 'inStock' },
  { id: 7, name: 'PVC cijev DN110', sku: 'PC-DN110-7', quantity: 0, unitPrice: 18.50, location: 'Skladište A3', status: 'ordered' },
  { id: 8, name: 'Ležaj 6205-2RS', sku: 'LZ-6205-RS', quantity: 156, unitPrice: 8.90, location: 'Skladište B1', status: 'inStock' },
  { id: 9, name: 'Zupčanik Z40 M2', sku: 'ZP-Z40M2-4', quantity: 8, unitPrice: 65.00, location: 'Skladište D2', status: 'low' },
  { id: 10, name: 'Industrijski filter', sku: 'IF-STD-015', quantity: 67, unitPrice: 22.00, location: 'Skladište C2', status: 'inStock' },
  { id: 11, name: 'Remen klinasti B68', sku: 'RK-B68-022', quantity: 0, unitPrice: 14.00, location: 'Skladište B2', status: 'ordered' },
  { id: 12, name: 'Bakrena žica 2.5mm', sku: 'BZ-25MM-09', quantity: 520, unitPrice: 6.30, location: 'Skladište A1', status: 'inStock' },
  { id: 13, name: 'Termostat industrij.', sku: 'TM-IND-006', quantity: 15, unitPrice: 42.00, location: 'Skladište C1', status: 'inStock' },
  { id: 14, name: 'Matica M12 (pak.)', sku: 'MT-M12-041', quantity: 22, unitPrice: 4.50, location: 'Skladište B1', status: 'low' },
  { id: 15, name: 'Osigurač 16A (pak.)', sku: 'OS-16A-018', quantity: 89, unitPrice: 7.80, location: 'Skladište C2', status: 'inStock' },
];

export const workOrders: WorkOrder[] = [
  { id: 1001, title: 'RN-1001', product: 'Metalna konstrukcija A', quantity: 50, deadline: '2026-03-18', priority: 'high', status: 'inProgress', assignee: 'Marko P.', progress: 65 },
  { id: 1002, title: 'RN-1002', product: 'Hidraulični sklop B', quantity: 25, deadline: '2026-03-20', priority: 'medium', status: 'inProgress', assignee: 'Ana K.', progress: 40 },
  { id: 1003, title: 'RN-1003', product: 'Rashladni sustav C', quantity: 10, deadline: '2026-03-22', priority: 'low', status: 'pending', assignee: 'Ivan S.', progress: 0 },
  { id: 1004, title: 'RN-1004', product: 'Čelični okvir D', quantity: 100, deadline: '2026-03-15', priority: 'high', status: 'inProgress', assignee: 'Petra M.', progress: 85 },
  { id: 1005, title: 'RN-1005', product: 'Pneumatski cilindar E', quantity: 200, deadline: '2026-03-25', priority: 'medium', status: 'pending', assignee: 'Luka B.', progress: 0 },
  { id: 1006, title: 'RN-1006', product: 'Ventilacijski kanal F', quantity: 30, deadline: '2026-03-28', priority: 'low', status: 'pending', assignee: 'Ana K.', progress: 0 },
  { id: 1007, title: 'RN-1007', product: 'Elektroormar G', quantity: 15, deadline: '2026-03-10', priority: 'high', status: 'completed', assignee: 'Marko P.', progress: 100 },
  { id: 1008, title: 'RN-1008', product: 'Transportna traka H', quantity: 5, deadline: '2026-03-08', priority: 'medium', status: 'completed', assignee: 'Ivan S.', progress: 100 },
  { id: 1009, title: 'RN-1009', product: 'Filter sustav I', quantity: 40, deadline: '2026-03-05', priority: 'low', status: 'completed', assignee: 'Petra M.', progress: 100 },
];

export const productionByDay = [185, 210, 198, 220, 195, 142, 134];
export const efficiencyTrend = [82, 84, 83, 87, 86, 89, 87];

export const kpiTrends = {
  produced: [1120, 1180, 1210, 1195, 1250, 1270, 1284],
  capacity: [82, 83, 85, 84, 86, 87, 87],
  openOrders: [28, 27, 25, 26, 24, 23, 23],
  quality: [96.8, 97.1, 97.3, 97.5, 97.8, 98.0, 98.1],
  onTime: [91, 92, 93, 92, 94, 95, 95],
  downtime: [4.2, 3.8, 3.5, 3.2, 2.9, 2.6, 2.4],
};

export interface ActivityEntry {
  time: string;
  message: string;
  type: 'production' | 'orders' | 'inventory' | 'quality' | 'system';
}

export const activityFeed: ActivityEntry[] = [
  { time: '14:32', message: 'Linija 3 — serija #4821 završena', type: 'production' },
  { time: '14:15', message: 'RN-1004 — rok istječe danas', type: 'orders' },
  { time: '13:58', message: 'Vijak M8x30 — zaliha ispod minimuma', type: 'inventory' },
  { time: '13:40', message: 'QC provjera — serija #4820 odobrena', type: 'quality' },
  { time: '13:22', message: 'Preventivno održavanje — Stroj M-07', type: 'system' },
];

export const orderStatusBreakdown = {
  pending: 3,
  inProgress: 3,
  completed: 3,
};

// Reports data for different date ranges
export const reportsData = {
  week: {
    production: [185, 210, 198, 220, 195],
    quality: [97.2, 98.1, 96.8, 98.5, 97.9],
    costs: [4200, 4500, 4100, 4800, 4300],
    labels: ['Pon,Uto,Sri,Čet,Pet', 'Mon,Tue,Wed,Thu,Fri'],
    summary: { production: 1008, quality: 97.7, costs: 21900 },
  },
  month: {
    production: [890, 920, 1050, 980],
    quality: [97.5, 98.0, 97.8, 98.2],
    costs: [21000, 22500, 24000, 23000],
    labels: ['T1,T2,T3,T4', 'W1,W2,W3,W4'],
    summary: { production: 3840, quality: 97.9, costs: 90500 },
  },
  quarter: {
    production: [3800, 4100, 4500],
    quality: [97.2, 97.8, 98.1],
    costs: [89000, 92000, 95000],
    labels: ['Sij,Velj,Ožu', 'Jan,Feb,Mar'],
    summary: { production: 12400, quality: 97.7, costs: 276000 },
  },
};
