import { useState, useEffect } from "react"
import { Box, Button, Stack, Typography, TextField} from '@mui/material'
import {exerciseOptions, fetchData} from '../util/fetchData'

const SearchExercise = () => {
  const [search, setSearch] = useState('')
  const [exercise, setExercise] = useState([])

  const handleSearch = async() => {
    if(search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises', exerciseOptions
      );
      
      const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        ||  exercise.target.toLowerCase().includes(search)
        ||  exercise.equipment.toLowerCase().includes(search)
        ||  exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercise(searchedExercises);

    }
  }

  return (
    <Stack alignItems="center"
    mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{fontSize: {
        lg: '44px' ,
        xs: '30px'
      }}}
      mb="50px"
      textAlign="center">
        Awesome Exercises You
        <br />
        Should know
      </Typography>
      <Box position="relative"
      mb="72px">
        <TextField 
         height="76px"
         sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '800px', xs: '200px' }, backgroundColor: '#fff', borderRadius: '40px' }}
         value={search}
         onChange={(e) => setSearch(e.target.value.toLowerCase())}
         placeholder="Search Exercises"
         type="text"/>
        <Button className="search-btn"
        sx={{
          bgcolor: '#FF2625',
          color: '#fff',
          textTransform: 'none',
          width: {lg: '175px', xs: '80px'},
          fontSize: {lg: '20px', xs: '14px'},
          height: '56px',
          position: 'absolute'
        }}
        onClick={handleSearch}>
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercise