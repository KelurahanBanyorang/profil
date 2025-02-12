import { Group, Stack, Text, Tooltip } from "@mantine/core";
import React from "react";
import VerticalDivider from "../../components/VerticalDivider.component";
import MainLayout from "../../layouts/MainLayout.layout";
import fotoKKN from "../../assets/img/foto_kkn3.jpg";
import logoKKN from "../../assets/img/logo-kknt.png";
import { StaticTooltip } from "../../components/Tooltip.component";

export interface IAbout {}

const About: React.FC<IAbout> = ({}) => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <MainLayout activePage="tentang">
      <Stack className="mx-8 md:mx-24 mt-10">
        <Stack className="gap-0 mb-4 md:mb-8">
          <Stack className="gap-0 mb-0">
            <Text className="font-poppins-semibold text-[32px] md:text-[42px] text-primary-text-500">
              Tentang Website
            </Text>
            <Text className="mb-3 font-poppins-semibold text-[18px] md:text-[22px] text-secondary-text-500 -mt-2">
              Kelurahan Banyorang
            </Text>
          </Stack>
          <div className="mb-4">
            <div className="flex float-right">
              <Stack className="filter relative gap-1 w-fit">
                <img
                  src={logoKKN}
                  alt="Logo KKN"
                  className="w-[180px] md:w-[300px] block"
                />
                <Text className="text-sm text-secondary-text-500 text-center">
                  Gambar Logo KKN
                </Text>
              </Stack>
            </div>
            <Text className="text-lg text-primary-text-500 text-justify mt-4">
              Website profil Kelurahan Banyorang ini dibuat oleh mahasiswa KKNT
              Inovasi Teknologi Tepat Guna Posko 2 Banyorang Universitas
              Hasanuddin atas inisiatif sendiri dengan tujuan memperkenalkan
              kelurahan Banyorang ke masyarakat umum. Terima kasih kepada Kepala
              Kelurahan, staf Kelurahan, Ketua RW/RT dan masyarakat setempat
              yang juga ikut berpartisipasi dalam pengerjaan Website ini.
            </Text>
            <Text className="text-primary-text-500 text-justify font-poppins-bold mt-6">
              Tentang Mahasiswa KKN
            </Text>
            <Text className="text-lg text-primary-text-500 text-justify mt-2">
              Mahasiswa Posko 2 KKNT Inovasi Teknologi Tepat Guna yang di
              tempatkan di kelurahan Banyorang merupakan penanggung jawab dalam
              pembuatan website ini. Posko 2 KKNT Inovasi Teknologi Tepat Guna
              ini di ketuai oleh Jailani Ahmad dan beranggotakan 9 orang yang
              berasal dari beberapa jurusan berbeda dari Universitas Hasanuddin.
              Posko 2 menaruh harapan semoga kehadirannya mampu memberikan
              dampak positif bagi kelurahan ini dan masyarakat sekitar dengan
              mengadakan program kerja yang sesuai dengan kondisi Banyorang saat
              ini.
              <br /> <br />
              Diantara Program kerja yang dicanangkan oleh peserta KKN di
              kelurahan ini salah satunya yaitu Pembuatan Website Kelurahan
              Banyorang. Semakin berkembangnya inovasi dibidang teknologi
              menuntut kita untuk bisa beradaptasi dengan hal tersebut.
              Tujuannya tentunya untuk mempermudah segala akses kerja yang akan
              dilakukan. Tujuan dicanangkan program Kerja “Pembuatan Website
              Kelurahan” ini agar bisa menjadi wadah bagi seluruh masyarakat
              untuk mengakses Informasi mengenai Kelurahan Banyorang dengan
              mudah. Selain itu Website ini nantinya akan menghadirkan informasi
              mengenai kelurahan banyorang sehingga diharapkan mampu menarik
              perhatian bagi masyarakat umum kemudian membuat Kelurahan
              Banyorang lebih dikenal lagi dan tentunya lebih maju.
            </Text>
            <Text className="text-primary-text-500 text-justify font-poppins-bold mt-6">
              Beberapa dari Inovasi yang Ditawarkan:
            </Text>
            <Text className="text-primary-text-500 text-justify mt-2">
              1. Mesin Pengering Hasil Pertanian
              <br />
              <a
                href="https://drive.google.com/file/d/15SzSQUxWJ8MPyz9kDZ9T2RnWqvsscT95/view?usp=sharing"
                target="_blank"
                className="text-primaryBlue"
              >
                2. Modul Mesin Penyortir Biji Kopi
              </a>
              <br />
              3. Pembuatan Website Profil Kelurahan
              <br />
              4. Pembuatan Peta Wilayah Banyorang
              <br />
              5. Dan lain-lain
            </Text>
          </div>
        </Stack>
        <div className="w-[95%] md:w-[75%] relative self-center mb-4 md:mb-10">
          <img src={fotoKKN} />
          <div className="absolute hidden md:block -top-6 -right-6 h-40 w-40 bg-primaryBlue -z-10"></div>
          <div className="absolute hidden md:block -bottom-1 -left-6 h-40 w-40 bg-primaryBlue -z-10"></div>
          <StaticTooltip label="Halo" position="top-end">
            <div className="absolute top-[65px] right-[340px] w-12 h-12 bg-transparent" />
          </StaticTooltip>

          <Text className="text-secondary-text-500 text-sm text-end">
            Gambar: Mahasiswa KKNT ITTG Unhas Gel. 109 Posko 2 Banyorang
          </Text>
        </div>
        <Stack className="gap-8">
          <Stack className="gap-2">
            <Text className="text-primary-text-500 text-justify font-poppins-bold">
              Teknis Website
            </Text>
            <Text className="text-lg text-primary-text-500 text-justify">
              Untuk front-end nya, website ini dibuat menggunakan bahasa
              pemrograman Typescript dan Framework React. Website ini tidak
              memiliki back-end, tetapi menggunakan Google Spreadsheet sebagai
              alternatif database. Website dideploy pada Github Pages
            </Text>
          </Stack>
          <Stack className="gap-2">
            <Text className="text-primary-text-500 text-justify font-poppins-bold">
              Lama Pengerjaan Website
            </Text>
            <Text className="text-lg text-primary-text-500 text-justify">
              Website dikerjakan selama 2 minggu pada Januari 2023 minggu ke-2 sampai minggu ke-3.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </MainLayout>
  );
};
export default About;
