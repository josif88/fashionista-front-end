import create from "zustand";

 const useItemStore = create((set) => ({

  uid: "",
  setUid: (value) => set({ uid: value }),

  description: "",
  setDescription: (value) => set({ description: value }),

  brand: "",
  setBrand: (value) => set({ brand: value }),

  tagsUid: [],
  setTagsUid: (value) => set({ tagsUid: value }),

  spacialOffer: false,
  setSpacialOffer: (value) => set({ spacialOffer: value }),

  sizes: [],
  setSizes: (value) => set({ sizes: value }),

  instagramUrl: "",
  setInstagramUrl: (value) => set({ instagramUrl: value }),

  date: 0,
  setDate: (value) => set({ date: value }),

  likesUid:[],
  setLikesUid: (value) => set({ likesUid: value }),

  facebookUrl: "",
  setFacebookUrl: (value) => set({ facebookUrl: value }),

  offerExpireDate: 0,
  setOfferExpireDate: (value) => set({ offerExpireDate: value }),

  price: 0,
  setPrice: (value) => set({ price: value }),

  storeUid: "",
  setStoreUid: (value) => set({ storeUid: value }),

  store: {},
  setStore: (value) => set({ store: value }),
  
  itemCategoryUid: "",
  setItemCategoryUid: (value) => set({ itemCategoryUid: value }),

  category: {},
  setCategory: (value) => set({ category: value }),

  mediaHttpUrls: [],
  setMediaHttpUrls: (value) => set({ mediaHttpUrls: value }),

  mediaUrls: [],
  setMediaUrls: (value) => set({ mediaUrls: value }),

}));
export default useItemStore;
