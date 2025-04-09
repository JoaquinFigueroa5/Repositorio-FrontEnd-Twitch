import { Navbar } from '../../components/navbars/Navbar'
import { useEffect } from 'react'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { Content } from '../../components/dashboard/Content'
import { Sidebar } from '../../components/dashboard/Sidebar'
import { useChannels } from '../../shared/hooks/useChannels'
import { useUserDetails } from '../../shared/hooks'
import './dashboardPage.css'

export const DashboardPage = () => {

  const { getChannels, allChanels, isFetching, followedChannels } = useChannels();
  const { isLogged } = useUserDetails()

  useEffect(() => {
    getChannels(isLogged)
  }, []);

  if(isFetching){
    return <LoadingSpinner/>
  }

  return (
    <div className='dashboard-container' >
      <Navbar />
      <Content channels={allChanels} getChannels={getChannels} />
      <Sidebar channels={followedChannels} />
    </div>
  )
}

