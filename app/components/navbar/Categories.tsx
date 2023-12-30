'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import { BiSwim, BiTennisBall, BiPaint, BiBowlingBall } from 'react-icons/bi';

import { GiShuttlecock, GiArcheryTarget, GiBodyBalance, GiHighPunch } from 'react-icons/gi';

import { IoCodeSlash, IoBasketballOutline, IoColorPaletteOutline } from "react-icons/io5";

import { BsCup } from "react-icons/bs";

import { TbChefHat, TbGolf, TbMicrophone2 } from "react-icons/tb";

import { MdOutlineSportsSoccer } from "react-icons/md";

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Swimming',
    icon: BiSwim,
    description: 'Swimming classes!',
  },
  {
    label: 'Soccer',
    icon: MdOutlineSportsSoccer,
    description: 'Soccer classes!',
  },
  {
    label: 'Tennis',
    icon: BiTennisBall,
    description: 'Tennis classes!',
  },
  {
    label: 'Basketball',
    icon: IoBasketballOutline,
    description: 'Basketball classes!',
  },
  {
    label: 'Badminton',
    icon: GiShuttlecock,
    description: 'Badminton classes!',
  },
  {
    label: 'Bowling',
    icon: BiBowlingBall,
    description: 'Bowling classes!',
  },
  {
    label: 'MMA',
    icon: GiHighPunch,
    description: 'MMA classes!',
  },
  {
    label: 'Golf',
    icon: TbGolf,
    description: 'Golf classes!',
  },
  {
    label: 'Archery',
    icon: GiArcheryTarget,
    description: 'Archery classes!',
  },
  {
    label: 'Dancing',
    icon: GiBodyBalance,
    description: 'Dancing classes!',
  },
  {
    label: 'Pottery',
    icon: BsCup,
    description: 'Pottery classes!',
  },
  {
    label: 'Cooking',
    icon: TbChefHat,
    description: 'Cooking classes!',
  },
  {
    label: 'Painting',
    icon: IoColorPaletteOutline,
    description: 'Painting classes!',
  },
  {
    label: 'Calligraphy',
    icon: BiPaint,
    description: 'Calligraphy classes!',
  },
  {
    label: 'Coding',
    icon: IoCodeSlash,
    description: 'Coding classes!',
  },
  {
    label: 'Singing',
    icon: TbMicrophone2,
    description: 'Singing classes!',
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;