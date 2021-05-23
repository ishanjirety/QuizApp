export const setToken = (token: string)=>localStorage.setItem('QuizUserToken',token)
export const getToken = () => localStorage.getItem('QuizUserToken')
export const removeToken = () => localStorage.removeItem('QuizUserToken')