import { create } from 'zustand';

type EventFormState = {
  image: string | null;
  images: string[];
  title: string;
  description: string;
  price: number;
  date: string;

  setImage: (img: string) => void;
  setImages: (imgs: string[]) => void;
  setTitle: (val: string) => void;
  setDescription: (val: string) => void;
  setPrice: (val: number) => void;
  setDate: (val: string) => void;
  resetForm: () => void;
};

export const useEventFormStore = create<EventFormState>((set) => ({
  image: null,
  images: [],
  title: '',
  description: '',
  price: 0,
  date: '',

  setImage: (img) => set({ image: img }),
  setImages: (imgs) => set({ images: imgs }),
  setTitle: (val) => set({ title: val }),
  setDescription: (val) => set({ description: val }),
  setPrice: (val) => set({ price: val }),
  setDate: (val) => set({ date: val }),

  resetForm: () =>
    set({
      image: null,
      images: [],
      title: '',
      description: '',
      price: 0,
      date: '',
    }),
}));
