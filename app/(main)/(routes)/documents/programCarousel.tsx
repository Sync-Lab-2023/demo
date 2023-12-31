import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';
import Link from 'next/link';

const programs = [
  {
    name: 'Program 1',
    icon: './—Pngtree—vector folder icon_3997397.png',
    url: 'newPage'
  },
  {
    name: 'Program 2',
    icon: './—Pngtree—vector folder icon_3997397.png',
    url: ''
  },
  {
    name: 'Program 3',
    icon: './—Pngtree—vector folder icon_3997397.png',
    url: ''
  },
  {
    name: 'Program 4',
    icon: './—Pngtree—vector folder icon_3997397.png',
    url: ''
  },
  {
    name: 'Program 5',
    icon: './—Pngtree—vector folder icon_3997397.png',
    url: ''
  },
  {
    name: 'Program 6',
    icon: './—Pngtree—vector folder icon_3997397.png',
    url: ''
  },
  {
    name: 'Program 7',
    icon: './—Pngtree—vector folder icon_3997397.png',
    url: ''
  },
  {
    name: 'Program 8',
    icon: './—Pngtree—vector folder icon_3997397.png',
    url: ''
  },
  {
    name: 'Program 9',
    icon: './—Pngtree—vector folder icon_3997397.png',
    url: ''
  },
  {
    name: 'Program 10',
    icon: './—Pngtree—vector folder icon_3997397.png',
    url: ''
  },
  {
    name: 'Program 11',
    icon: './—Pngtree—vector folder icon_3997397.png',
    url: ''
  },
  {
    name: 'Program 12',
    icon: './—Pngtree—vector folder icon_3997397.png',
    url: ''
  },
  // Add more Program objects here...
];

const ProgramCarousel = () => {
    const ProgramsPerPage = 4;
  
    const ProgramGroups = [];
    for (let i = 0; i < programs.length; i += ProgramsPerPage) {
      ProgramGroups.push(programs.slice(i, i + ProgramsPerPage));
    }
  
    const handleProgramClick = (program: { url?: string }) => {
        if (program.url) {
          window.open(program.url, '_blank');
        }
      };

    return (
      <div>
        <div className="carousel-container flex overflow-x-auto">
          <Carousel showThumbs={false}>
            {ProgramGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="Program-group flex">
              {group.map((Program, index) => (
                <div key={index} className="Program-item w-1/4 p-4 text-center cursor-pointer" onClick={() => handleProgramClick(Program)}>
                  <img src={Program.icon} alt={Program.name} className="max-w-full" />
                  <p>{Program.name}</p>
                </div>
              ))}
            </div>
            ))}
          </Carousel>
        </div>

        <div>
    </div>
      </div>
    );
  };

export default ProgramCarousel;