import React from 'react'
import './App.css';
const dummyImageData = [
  {
    id: 1,
    url: 'https://picsum.photos/200/300?random=1',
    description: 'Random image 1'
  },
  {
    id: 2,
    url: 'https://picsum.photos/200/300?random=2',
    description: 'Random image 2'
  },
  {
    id: 3,
    url: 'https://picsum.photos/200/300?random=3',
    description: 'Random image 3'
  },
  {
    id: 4,
    url: 'https://picsum.photos/200/300?random=4',
    description: 'Random image 4'
  },
  {
    id: 5,
    url: 'https://picsum.photos/200/300?random=5',
    description: 'Random image 5'
  },
  {
    id: 6,
    url: 'https://media.licdn.com/dms/image/v2/D5603AQGR_C2oAwVRBQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1673037498537?e=1731542400&v=beta&t=2Sobre0VYJQ4aD2IFjJwsK-iEaYdDCUvjH0yWwontFo',
    description: 'Nature image from Unsplash'
  },
  {
    id: 7,
    url: 'https://media.licdn.com/dms/image/v2/D4D03AQEdHAzKVRCM8g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697706616770?e=1731542400&v=beta&t=PJW2vIElyWQFyG9XRb3V3CruojPcvkOZbU61umwt4pY',
    description: 'City image from Unsplash'
  },
  {
    id: 8,
    url: 'https://media.licdn.com/dms/image/v2/D5635AQGKDuPt7jRO2w/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1724728893401?e=1726552800&v=beta&t=ACiPEl0FvVD0752N9HxeacUwiVVmbIa4Goym_Nuz8SM',
    description: 'Kitten image'
  },
  {
    id: 9,
    url: 'https://media.licdn.com/dms/image/v2/C4D03AQFEIQipjGcJTA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639413641258?e=1731542400&v=beta&t=mlPNz0e1O6dhB79LbAkt0IM1smztocAVexijzQom3Yw',
    description: 'Placeholder image'
  },
  {
    id: 10,
    url: 'https://loremflickr.com/200/300',
    description: 'Random image from LoremFlickr'
  }
];

const Modal = ({ image, setOpen, open }) => {
  if (!open) return null;

  return (
    <div className="modal" onClick={() => setOpen(false)}>
      <div className="modal-content">
        <img src={image.url} alt={image.description} style={{ maxWidth: '90vw', maxHeight: '90vh' }} />
      </div>
    </div>
  );
};

function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="App">
      {dummyImageData.map((obj) => (
        <button key={obj.id} onClick={() => handleImageClick(obj)} style={{ border: 'none', background: 'none', padding: 0 }}>
          <img src={obj.url} alt={obj.description} style={{ height: '200px', width: '150px', margin: '10px' }} />
        </button>
      ))}
      {selectedImage && (
        <Modal image={selectedImage} setOpen={setSelectedImage} open={!!selectedImage} />
      )}
    </div>
  );
}

export default App;