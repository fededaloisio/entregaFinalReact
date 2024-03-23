import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const CardSkeleton = () => {
  return (
    <Stack spacing={1}>
      
    <Skeleton animation="wave" style={{borderRadius: "10px", margin: "20px auto"}} variant="rectangular" width={336} height={462} />
    </Stack>
  )
}

export default CardSkeleton