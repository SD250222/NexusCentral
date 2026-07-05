import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<boolean>(this.getStoredTheme());
  theme$ = this.themeSubject.asObservable();

  setTheme(value: boolean): void {
    this.themeSubject.next(value);
    sessionStorage.setItem('isDarkTheme', value.toString());
  }

  getTheme(): boolean {
    return this.themeSubject.getValue();
  }

  private getStoredTheme(): boolean {
    const storedValue = sessionStorage.getItem('isDarkTheme');
    return storedValue === 'true';
  }
}
