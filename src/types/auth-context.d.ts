interface AuthContextInterface {
    user?:User | null
    authenticated: boolean
    login: (user: string, password: string) => void
    loading:boolean
    logout?: () => void
  };


  