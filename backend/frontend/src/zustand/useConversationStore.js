import { create } from 'zustand'

const useLanguage = create((set) => ({
    // SelectedFriend: null,
    // setSelectedFriend: (SelectedFriend) => set({ SelectedFriend }),
    // messages: [],
    // setMessages: (messages) => set({ messages }),
    // AuthUser: JSON.parse(localStorage.getItem("chat-user")),
    // setAuthUser: (AuthUser) => set({ AuthUser }),
    isEng: true,
    setIsEng: (isEng) => set({ isEng }),
}))

export default useLanguage
