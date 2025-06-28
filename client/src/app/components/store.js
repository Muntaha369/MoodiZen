import { create } from "zustand";


export const useData = create((set)=>({
  userData : [],
  trackMood : (week)=>set((state)=>({userData:[...state.userData, week]})),
  resetMood : ()=>set(()=>({userData:[]}))
}))

export const useTemp = create((set)=>({
  temp : {},
  trackTemp : (week)=>set(()=>({temp:week}))
}))
