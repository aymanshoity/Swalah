import { create } from 'zustand';

import { persist } from 'zustand/middleware';

type User = {
   is_authenticated: boolean
   [key: string]: any
}

type SwalahStore = {
   user: User
   updateUser: (newUser: User) => void
   removeUser: () => void
}
export const swalah = create<SwalahStore>()(
   persist<SwalahStore>(
      (set) => ({
         user: { is_authenticated: false },
         updateUser: (newUser) => set((state) => ({
            user: { ...state.user, ...newUser, is_authenticated: true },
         })),
         removeUser: () => set({ user: { is_authenticated: false } }),
      }),
      { name: 'swalah-storage' }
   )
);
