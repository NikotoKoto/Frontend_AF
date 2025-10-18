export interface WeddingImage {
  image: string;
  alt: string;
}

export interface WeddingData {
  place: WeddingImage[];
  accessory: WeddingImage[];
  ceremonyLaic: WeddingImage[];
  ceremonyReligious: WeddingImage[];
  reception: WeddingImage[];
}

export const WEDDING_DATA: WeddingData = {
  place: [
    { image: 'assets/images/centresdetables/bouquetMedicisse.jpg', alt: 'Bouquet de fleurs dans médicisses' },
    { image: 'assets/images/centresdetables/frame1.jpg', alt: 'plan de table' },
    { image: 'assets/images/centresdetables/frame2.jpg', alt: 'plan de table' },
    { image: 'assets/images/centresdetables/frame3.jpg', alt: 'plan de table mariage' },
    { image: 'assets/images/centresdetables/frameMirror.jpg', alt: 'plan de table mariage' },
    { image: 'assets/images/centresdetables/medicisse1.jpg', alt: 'Bouquet medicisse' },
    { image: 'assets/images/centresdetables/place.jpg', alt: 'Place' },
    { image: 'assets/images/centresdetables/roundTable.jpg', alt: 'table ronde' },
    { image: 'assets/images/centresdetables/stare1.jpg', alt: 'escalier décoré pour un mariage' },
    { image: 'assets/images/centresdetables/stare5.jpg', alt: 'escalier décoré pour un mariage' },
    { image: 'assets/images/centresdetables/tableRonde1.jpg', alt: 'table de mariage' },
    { image: 'assets/images/centresdetables/centerTable8.jpg', alt: 'centre de table de mariage' },
    { image: 'assets/images/centresdetables/centerTable9.jpg', alt: 'centre de table de mariage' },
    { image: 'assets/images/centresdetables/centreTable9.jpg', alt: 'centre de table de mariage' },
    { image: 'assets/images/centresdetables/tablearrond1.jpg', alt: 'centre de table de mariage' },
    { image: 'assets/images/centresdetables/tableArround3.jpg', alt: 'centre de table de mariage' },
    { image: 'assets/images/centresdetables/tablePath1.jpg', alt: 'chemin de table de mariage' },
    { image: 'assets/images/centresdetables/tablePath2.jpg', alt: 'chemin de table de mariage' },
    { image: 'assets/images/centresdetables/tablePath3.jpg', alt: 'chemin de table de mariage' },
    { image: 'assets/images/centresdetables/tablePath4.jpg', alt: 'chemin de table de mariage' },
    { image: 'assets/images/centresdetables/tableCenter7.jpg', alt: 'centre de table de mariage' },
    { image: 'assets/images/centresdetables/Tablecenter8.jpg', alt: 'centre de table de mariage' },

  ],
  accessory: [
    {image: 'assets/images/accessory/accessoire1.heic', alt: 'accessoire de mariage' },
    {image: 'assets/images/accessory/accessoire2.heic', alt: 'accessoire de mariage' },
    {image: 'assets/images/accessory/accessoire3.heic', alt: 'accessoire de mariage' },
    {image: 'assets/images/accessory/accessoire4.HEIC', alt: 'accessoire de mariage' },
    {image: 'assets/images/accessory/accessoire5.HEIC', alt: 'accessoire de mariage' },
    {image: 'assets/images/accessory/accessoire6.jpg', alt: 'accessoire de mariage' },
    {image: 'assets/images/accessory/accessoire7.heic', alt: 'accessoire de mariage' },
    {image: 'assets/images/accessory/accessoire8.heic', alt: 'accessoire de mariage' },
    {image: 'assets/images/accessory/accessoire9.HEIC', alt: 'accessoire de mariage' },
    {image: 'assets/images/accessory/accessoire10.heic', alt: 'accessoire de mariage' },
    {image: 'assets/images/accessory/accessoire11.heic', alt: 'accessoire de mariage' },
    {image: 'assets/images/accessory/accessoire12.heic', alt: 'accessoire de mariage' },
    {image: 'assets/images/accessory/accessoire13.heic', alt: 'accessoire de mariage' },
    {image: 'assets/images/accessory/accessoire14.heic', alt: 'accessoire de mariage' },
    {image: 'assets/images/accessory/accessoire15.heic', alt: 'accessoire de mariage' }
  ],
  ceremonyLaic: [],
  ceremonyReligious: [],
  reception: [],
};