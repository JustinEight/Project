export interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
}

export interface DataItem {
  id: number;
  name: string;
}

export interface AppData {
  items: DataItem[];
  timestamp: string;
}
