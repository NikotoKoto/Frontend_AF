export interface WeddingImage {
  id: number;
  title: string;
  imageUrl: string;
}

export interface WeddingData {
  place: WeddingImage[];
  accessory: WeddingImage[];
  ceremonyLaic: WeddingImage[];
  ceremonyReligious: WeddingImage[];

}

export const WEDDING_DATA: WeddingData = {
  place: [
    { id: 1, title: 'Bouquet de fleurs dans médicisses', imageUrl: 'assets/images/centresdetables/bouquetMedicisse.jpg' },
    { id: 2, title: 'Plan de table', imageUrl: 'assets/images/centresdetables/frame1.jpg' },
    { id: 3, title: 'Plan de table', imageUrl: 'assets/images/centresdetables/frame2.jpg' },
    { id: 4, title: 'Plan de table mariage', imageUrl: 'assets/images/centresdetables/frame3.jpg' },
    { id: 5, title: 'Plan de table mariage', imageUrl: 'assets/images/centresdetables/frameMirror.jpg' },
    { id: 6, title: 'Bouquet medicisse', imageUrl: 'assets/images/centresdetables/medicisse1.jpg' },
    { id: 7, title: 'Place', imageUrl: 'assets/images/centresdetables/place.jpg' },
    { id: 8, title: 'Table ronde', imageUrl: 'assets/images/centresdetables/roundTable.jpg' },
    { id: 9, title: 'Escalier décoré pour un mariage', imageUrl: 'assets/images/centresdetables/stare1.jpg' },
    { id: 10, title: 'Escalier décoré pour un mariage', imageUrl: 'assets/images/centresdetables/stare5.jpg' },
    { id: 11, title: 'Table de mariage', imageUrl: 'assets/images/centresdetables/tableRonde1.jpg' },
    { id: 12, title: 'Centre de table de mariage', imageUrl: 'assets/images/centresdetables/centerTable8.jpg' },
    { id: 13, title: 'Centre de table de mariage', imageUrl: 'assets/images/centresdetables/centerTable9.jpg' },
    { id: 14, title: 'Centre de table de mariage', imageUrl: 'assets/images/centresdetables/centreTable9.jpg' },
    { id: 15, title: 'Centre de table de mariage', imageUrl: 'assets/images/centresdetables/tablearrond1.jpg' },
    { id: 16, title: 'Centre de table de mariage', imageUrl: 'assets/images/centresdetables/tableArround3.jpg' },
    { id: 17, title: 'Chemin de table de mariage', imageUrl: 'assets/images/centresdetables/tablePath1.jpg' },
    { id: 18, title: 'Chemin de table de mariage', imageUrl: 'assets/images/centresdetables/tablePath2.jpg' },
    { id: 19, title: 'Chemin de table de mariage', imageUrl: 'assets/images/centresdetables/tablePath3.jpg' },
    { id: 20, title: 'Chemin de table de mariage', imageUrl: 'assets/images/centresdetables/tablePath4.jpg' },
    { id: 21, title: 'Centre de table de mariage', imageUrl: 'assets/images/centresdetables/tableCenter7.jpg' },
    { id: 22, title: 'Centre de table de mariage', imageUrl: 'assets/images/centresdetables/Tablecenter8.jpg' },
  ],
  accessory: [
    { id: 1, title: 'Accessoire de mariage', imageUrl: 'assets/images/accessory/accessoire1.heic' },
    { id: 2, title: 'Accessoire de mariage', imageUrl: 'assets/images/accessory/accessoire2.heic' },
    { id: 3, title: 'Accessoire de mariage', imageUrl: 'assets/images/accessory/accessoire3.heic' },
    { id: 4, title: 'Accessoire de mariage', imageUrl: 'assets/images/accessory/accessoire4.HEIC' },
    { id: 5, title: 'Accessoire de mariage', imageUrl: 'assets/images/accessory/accessoire5.HEIC' },
    { id: 6, title: 'Accessoire de mariage', imageUrl: 'assets/images/accessory/accessoire6.jpg' },
    { id: 7, title: 'Accessoire de mariage', imageUrl: 'assets/images/accessory/accessoire7.heic' },
    { id: 8, title: 'Accessoire de mariage', imageUrl: 'assets/images/accessory/accessoire8.heic' },
    { id: 9, title: 'Accessoire de mariage', imageUrl: 'assets/images/accessory/accessoire9.HEIC' },
    { id: 10, title: 'Accessoire de mariage', imageUrl: 'assets/images/accessory/accessoire10.heic' },
    { id: 11, title: 'Accessoire de mariage', imageUrl: 'assets/images/accessory/accessoire11.heic' },
    { id: 12, title: 'Accessoire de mariage', imageUrl: 'assets/images/accessory/accessoire12.heic' },
    { id: 13, title: 'Accessoire de mariage', imageUrl: 'assets/images/accessory/accessoire13.heic' },
    { id: 14, title: 'Accessoire de mariage', imageUrl: 'assets/images/accessory/accessoire14.heic' },
    { id: 15, title: 'Accessoire de mariage', imageUrl: 'assets/images/accessory/accessoire15.heic' },
    { id: 16, title: 'Accessoire de mariage', imageUrl: 'assets/images/accessory/accessoire16.jpg' },
  ],
  ceremonyLaic: [],
  ceremonyReligious: [],

};