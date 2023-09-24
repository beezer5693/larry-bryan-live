export default function formatCurrency(amount: string): string {
  return amount.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
