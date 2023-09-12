'use client'
import { Grid, Box, Alert, AlertTitle } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>

        {/* <Publications/> */}
        <Alert severity="warning" sx={{backgroundColor:"#FFF4E5", width:"1000px", height:"100px", fontSize:"24px", display:"flex", justifyContent:"center", alignItems:"center"}}>
        Close the extension and reopen it to get logged in.
        </Alert>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
