import { Rating, styled } from '@mui/material';

const CustomRatings = styled(Rating)(
  () => `
  display: flex;
  & .MuiRating-icon {
    color: #FFD19A;
  }
  & .MuiRating-iconEmpty {
    color: #E9DBCB;
  }
  `
);

export default CustomRatings;
