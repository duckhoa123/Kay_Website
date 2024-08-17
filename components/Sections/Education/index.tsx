import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './EducationCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const EducationSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Education
      </Heading>
      

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="Victoria University"
            src="/works/Victoria.png"
            description="Master of Applied Information Technology."
            duration="Duration: Nov 2022 - Sep 2024 "
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl=""
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="Vietnam Maritime University"
            src="/works/VMU_Logo.png"
            description="Bachelor of Information Technology."
            duration="Duration: Sep 2018 - Aug 2022 "
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl=""
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

       
      </MotionGrid>
    </Stack>
  )
}

export default memo(EducationSection)

