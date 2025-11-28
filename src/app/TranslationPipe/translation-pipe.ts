import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translation'
})
export class TranslationPipe implements PipeTransform {
 private translations: { [key: string]: string } = {
    'Available': 'متاحة',
    'Reserved': 'محجوزة',
    'Occupied': 'مشغولة',
    'Pending': 'قيد الإنتظار',
    'InProgress': 'قيد التقدم',
    'Completed': 'مدفوع',
    'Cancelled': 'تم الإلغاء',
    'Admin': 'مدير',
    'Customer': 'عميل',
    'Staff': 'موظف',
    'AdminAssistants': 'مساعد مدير',
    'Indoor': 'بالداخل',
    'Outdoor': 'بالخارج',
    'NearWindow': 'بجانب الشباك',
    'VIP': 'مميزة',
  };
  transform(value: string): string {
    if (!value) return '';
    return this.translations[value] || value;
  }
}
