import { Group, Stack, Text } from "@mantine/core";
import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import fotoKKN from "../assets/img/foto_kkn3.jpg";
import VerticalDivider from "../components/VerticalDivider";
import { SearchIconOutline } from "../assets/icons/Fluent";
import logoKKN from "../assets/img/logo-kknt.png";

export interface IAbout {}

const About: React.FC<IAbout> = ({}) => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <MainLayout>
      <Stack className="mx-24 mt-10">
        <Stack className="gap-0 mb-8">
          <Stack className="gap-0 mb-0">
            <Text className="font-poppins-semibold text-[42px] text-primary-text-500">
              Tentang Website
            </Text>
            <Text className="mb-3 font-poppins-semibold text-[22px] text-secondary-text-500 -mt-2">
              Kelurahan Banyorang
            </Text>
          </Stack>
          <Group className="relative gap-16 mb-4">
            <Text className="text-lg text-primary-text-500 text-justify w-[60%] mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              quaerat odit provident cum architecto assumenda tenetur
              perspiciatis repudiandae sequi distinctio quae vitae quibusdam
              minima vel sit impedit temporibus, delectus ipsam. Nobis, a enim
              animi fugit repellendus consectetur iste repellat, eaque labore
              molestiae maxime ab quibusdam suscipit quia nemo necessitatibus
              nostrum.
              <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam qui
              eum ea eligendi quis deserunt inventore dolore itaque suscipit
              aliquid, similique omnis, voluptas consectetur incidunt.
              Recusandae autem cumque debitis molestiae! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Quas illo natus consequuntur
              nam est tempore nobis sapiente laboriosam cumque fugiat laborum
              illum id officiis amet quo similique nesciunt, sed quia.
            </Text>

            <VerticalDivider h="lg" />

            <img src={logoKKN} alt="Logo KKN" className="w-[260px]" />
          </Group>
        </Stack>
        <div className="w-[75%] relative self-center mt-10">
          <img src={fotoKKN} />
          <div className="absolute -top-6 -right-6 h-40 w-40 bg-primaryBlue -z-10"></div>
          <div className="absolute -bottom-1 -left-6 h-40 w-40 bg-primaryBlue -z-10"></div>
          <Text className="text-secondary-text-500 text-sm text-end">
            Gambar: Mahasiswa KKNT ITTG Unhas Gel. 109 Posko 2 Banyorang
          </Text>
        </div>
      </Stack>
    </MainLayout>
  );
};
export default About;
