// ── KPI ──────────────────────────────────────────────
export interface DemoKpi {
  label: string;
  value: string;
  trend: string;
  trendDirection: 'up' | 'down';
  color: 'blue' | 'amber' | 'green' | 'primary';
  icon: string;
}

// ── Notifications ───────────────────────────────────
export interface DemoNotification {
  id: number;
  priority: 'red' | 'amber' | 'green' | 'blue';
  titleKey: string;
  descKey: string;
  time: string;
}

export const notifications: DemoNotification[] = [
  { id: 1, priority: 'red', titleKey: 'n1Title', descKey: 'n1Desc', time: '10 min' },
  { id: 2, priority: 'amber', titleKey: 'n2Title', descKey: 'n2Desc', time: '1h' },
  { id: 3, priority: 'green', titleKey: 'n3Title', descKey: 'n3Desc', time: '2h' },
  { id: 4, priority: 'blue', titleKey: 'n4Title', descKey: 'n4Desc', time: '3h' },
  { id: 5, priority: 'amber', titleKey: 'n5Title', descKey: 'n5Desc', time: '5h' },
];

// ── Cash Flow (6 months) ────────────────────────────
export const cashFlowReceipts = [72400, 68900, 81200, 76500, 89300, 84700];
export const cashFlowExpenses = [58200, 61400, 54800, 63100, 57600, 62300];

// ── Revenue Trend (12 months) ───────────────────────
export const revenueTrend = [52300, 58100, 61400, 57800, 63200, 68900, 72100, 75600, 71200, 78400, 82100, 84700];

// ── Expense Categories ──────────────────────────────
export interface ExpenseCategory {
  labelKey: string;
  value: number;
  color: string;
}

export const expenseCategories: ExpenseCategory[] = [
  { labelKey: 'wages', value: 38, color: '#2563eb' },
  { labelKey: 'rent', value: 22, color: '#7c3aed' },
  { labelKey: 'materials', value: 18, color: '#059669' },
  { labelKey: 'marketing', value: 12, color: '#d97706' },
  { labelKey: 'other', value: 10, color: '#64748b' },
];

// ── VAT Rates ───────────────────────────────────────
export interface VatRow {
  rate: string;
  base: number;
  vat: number;
  total: number;
}

export const vatRows: VatRow[] = [
  { rate: '25%', base: 124800, vat: 31200, total: 156000 },
  { rate: '13%', base: 38400, vat: 4992, total: 43392 },
  { rate: '5%', base: 12600, vat: 630, total: 13230 },
  { rate: '0%', base: 8200, vat: 0, total: 8200 },
];

// ── Invoices ────────────────────────────────────────
export interface DemoInvoice {
  id: number;
  number: string;
  client: string;
  amount: number;
  vat: number;
  date: string;
  status: 'paid' | 'sent' | 'overdue' | 'draft';
}

export const invoices: DemoInvoice[] = [
  { id: 1, number: 'FAK-2026-0142', client: 'TechnoServis d.o.o.', amount: 3640, vat: 910, date: '12.03.2026.', status: 'paid' },
  { id: 2, number: 'FAK-2026-0141', client: 'MetalProm d.o.o.', amount: 8920, vat: 2230, date: '10.03.2026.', status: 'sent' },
  { id: 3, number: 'FAK-2026-0140', client: 'Adriatic Cargo d.o.o.', amount: 5400, vat: 1350, date: '08.03.2026.', status: 'overdue' },
  { id: 4, number: 'FAK-2026-0139', client: 'Zagreb Consulting j.d.o.o.', amount: 2100, vat: 525, date: '06.03.2026.', status: 'paid' },
  { id: 5, number: 'FAK-2026-0138', client: 'Dalmacija Export d.o.o.', amount: 12750, vat: 3187.5, date: '04.03.2026.', status: 'draft' },
  { id: 6, number: 'FAK-2026-0137', client: 'Slavonija Agro d.d.', amount: 4300, vat: 1075, date: '02.03.2026.', status: 'paid' },
  { id: 7, number: 'FAK-2026-0136', client: 'Istria Wines d.o.o.', amount: 6800, vat: 884, date: '28.02.2026.', status: 'sent' },
  { id: 8, number: 'FAK-2026-0135', client: 'Rijeka Shipping d.o.o.', amount: 15200, vat: 3800, date: '26.02.2026.', status: 'paid' },
  { id: 9, number: 'FAK-2026-0134', client: 'Osijek IT Solutions d.o.o.', amount: 3250, vat: 812.5, date: '24.02.2026.', status: 'overdue' },
  { id: 10, number: 'FAK-2026-0133', client: 'Split Marina d.o.o.', amount: 9600, vat: 2400, date: '22.02.2026.', status: 'paid' },
  { id: 11, number: 'FAK-2026-0132', client: 'Zadar Textiles d.o.o.', amount: 1850, vat: 462.5, date: '20.02.2026.', status: 'draft' },
  { id: 12, number: 'FAK-2026-0131', client: 'Dubrovnik Hotels d.d.', amount: 22400, vat: 5600, date: '18.02.2026.', status: 'sent' },
];

// ── OCR Fields ──────────────────────────────────────
export interface OcrField {
  fieldKey: string;
  value: string;
  confidence: number;
}

export const ocrFields: OcrField[] = [
  { fieldKey: 'invoiceNumber', value: 'FAK-2026-0142', confidence: 99.8 },
  { fieldKey: 'issuer', value: 'TechnoServis d.o.o.', confidence: 99.5 },
  { fieldKey: 'oib', value: '12345678901', confidence: 99.9 },
  { fieldKey: 'issueDate', value: '12.03.2026.', confidence: 98.7 },
  { fieldKey: 'dueDate', value: '12.04.2026.', confidence: 98.2 },
  { fieldKey: 'totalAmount', value: '4.550,00 EUR', confidence: 99.6 },
  { fieldKey: 'vatAmount', value: '910,00 EUR', confidence: 99.1 },
  { fieldKey: 'iban', value: 'HR1234567890123456789', confidence: 97.8 },
];

// ── Chat Messages ───────────────────────────────────
export interface ChatMessage {
  role: 'user' | 'assistant';
  contentKey: string;
}

export const chatMessages: ChatMessage[] = [
  { role: 'user', contentKey: 'q1' },
  { role: 'assistant', contentKey: 'a1' },
  { role: 'user', contentKey: 'q2' },
  { role: 'assistant', contentKey: 'a2' },
];

export const cannedResponses: string[] = ['canned1', 'canned2'];

// ── Document Classification ─────────────────────────
export interface DocClassification {
  typeKey: string;
  accuracy: number;
  icon: string;
}

export const docClassifications: DocClassification[] = [
  { typeKey: 'invoice', accuracy: 99.2, icon: 'receipt' },
  { typeKey: 'contract', accuracy: 97.8, icon: 'document' },
  { typeKey: 'report', accuracy: 96.5, icon: 'chart' },
  { typeKey: 'quote', accuracy: 98.1, icon: 'tag' },
  { typeKey: 'purchaseOrder', accuracy: 97.3, icon: 'cart' },
  { typeKey: 'letter', accuracy: 95.9, icon: 'mail' },
];

// ── Calendar Deadlines ──────────────────────────────
export interface CalendarDeadline {
  day: number;
  labelKey: string;
  color: 'red' | 'amber' | 'blue';
}

export const calendarDeadlines: CalendarDeadline[] = [
  { day: 20, labelKey: 'vatDeadline', color: 'red' },
  { day: 25, labelKey: 'taxDeadline', color: 'amber' },
  { day: 31, labelKey: 'payrollDeadline', color: 'blue' },
];

// ── Trust Stats ─────────────────────────────────────
export const trustStats = {
  users: '500+',
  docs: '1M+',
  uptime: '99.9%',
  accuracy: '98%+',
};

// ── Invoice Preview OCR Text ────────────────────────
export const ocrResultText = `FAKTURA br. 2026-0142

Izdavatelj: TechnoServis d.o.o.
OIB: 12345678901
Adresa: Vukovarska 234, 10000 Zagreb

Kupac: MetalProm d.o.o.
OIB: 98765432109

Datum izdavanja: 12.03.2026.
Datum dospijeća: 12.04.2026.

Stavke:
1. Servis industrijske opreme    2.400,00 EUR
2. Zamjenski dijelovi             890,00 EUR
3. Transport i montaža            350,00 EUR
                          ─────────────────
Ukupno bez PDV-a:              3.640,00 EUR
PDV (25%):                        910,00 EUR
                          ─────────────────
UKUPNO ZA PLAĆANJE:            4.550,00 EUR

IBAN: HR1234567890123456789
Poziv na broj: 2026-0142`;
