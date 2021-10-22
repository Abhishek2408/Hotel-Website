const hotels = [
  {
    name: "ITC Maratha",
    price: 4104,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
    location: "mumbai",
    image: "./Images/hotel_1.jpg",
    dates:"2021-10-22",
    video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
    location_url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0833978161563!2d72.86754391432777!3d19.10399695605758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8412eabd40d%3A0x24090700409101ee!2sITC%20Maratha%2C%20a%20Luxury%20Collection%20Hotel%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1630522892695!5m2!1sen!2sin",
    images: [
      "./Images/hotel1/image1.jpg",
      "./Images/hotel1/image2.jpg",
      "./Images/hotel1/image3.jpg",
    ],
  },
  {
    name: "The Oberoi",
    price: 12107,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
    location: "mumbai",
    image: "./Images/hotel_2.jpg",
    dates:"2021-10-22",
    video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
    location_url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.099712724778!2d72.81826291461627!3d18.926980061558716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e96fffffff%3A0x385eaa65d82abec1!2sThe%20Oberoi%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1632838527181!5m2!1sen!2sin",
    images: [
      "./Images/hotel2/image1.jpg",
      "./Images/hotel2/image2.jpg",
      "./Images/hotel2/image3.jpg",
    ],
  },
  {
    name: "Trident Bandra",
    price: 5730,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
    location: "mumbai",
    image: "./Images/hotel_3.jpg",
    dates:"2021-10-22",
    video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
    location_url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4615.8273830029175!2d72.86574581057889!3d19.066556964927432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e94b11a821%3A0x74acefa4382dbb18!2sTrident%20Hotel%20Bandra%20Kurla!5e0!3m2!1sen!2sin!4v1632843917036!5m2!1sen!2sin",
    images: [
      "./Images/hotel3/image1.jpg",
      "./Images/hotel3/image2.jpg",
      "./Images/hotel3/image3.jpg",
    ],
  },
  {
    name: "Taj , Santacruz",
    price: 5787,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
    location: "delhi",
    image: "./Images/hotel_4.jpg",
    dates:"2021-10-22",
    video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
    location_url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.3427916395276!2d72.85215461432767!3d19.092612056412914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b5e356dcbb%3A0x64833ddc13e558ae!2sTaj%20Santacruz!5e0!3m2!1sen!2sin!4v1632844007451!5m2!1sen!2sin",
    images: [
      "./Images/hotel4/image1.jpg",
      "./Images/hotel4/image2.jpg",
      "./Images/hotel4/image3.jpg",
    ],
  },
  {
    name: "Sofitel Mumbai",
    price: 3920,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
    location: "hydrabad",
    image: "./Images/hotel_5.jpg",
    video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
    location_url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9123339185408!2d72.86678801432723!3d19.067591657192942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8df0bffffff%3A0x1ae312da31f46ddb!2sSofitel%20Mumbai%20BKC!5e0!3m2!1sen!2sin!4v1632844093384!5m2!1sen!2sin",
    images: [
      "./Images/hotel5/image1.jpg",
      "./Images/hotel5/image2.jpg",
      "./Images/hotel5/image3.jpg",
    ],
  },
  {
    name: "ITC Grand Central",
    price: 5656,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
    location: "chennai",
    image: "./Images/hotel_6.jpg",
    video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
    location_url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.486757093826!2d72.83604741432623!3d18.998261059349662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c84440013f13%3A0x5c5fb613a8b199d8!2sITC%20Grand%20Central%2C%20A%20Luxury%20Collection%20Hotel%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1632844174020!5m2!1sen!2sin",
    images: [
      "./Images/hotel6/image1.jpg",
      "./Images/hotel6/image2.jpg",
      "./Images/hotel6/image3.jpg",
    ],
  },
  {
    name: "Trident Nariman Point",
    price: 6582,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
    location: "hydrabad",
    image: "./Images/hotel_7.jpg",
    video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
    location_url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.082645538444!2d72.81900981432518!3d18.927735661535937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1ef25d1fdc1%3A0xe3f924327fd9fdef!2sTrident%20Hotel%2C%20Nariman%20Point%20Mumbai!5e0!3m2!1sen!2sin!4v1632844240227!5m2!1sen!2sin",
    images: [
      "./Images/hotel7/image1.jpg",
      "./Images/hotel7/image2.jpg",
      "./Images/hotel7/image3.jpg",
    ],
  },
  {
    name: "Taj Lands End",
    price: 6954,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
    location: "delhi",
    image: "./Images/hotel_8.jpg",
    video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
    location_url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.454916998031!2d72.81703551432688!3d19.04372615793621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c945f2fb1149%3A0xa2ba742a39963b31!2sTaj%20Lands%20End%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1632844279488!5m2!1sen!2sin",
    images: [
      "./Images/hotel8/image1.jpg",
      "./Images/hotel8/image2.jpg",
      "./Images/hotel8/image3.jpg",
    ],
  },
  {
    name: "Novetel ",
    price: 3696,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi sequi, quos possimus aperiam.",
    location: "chennai",
    image: "./Images/hotel_9.jpg",
    video: "./Videos/ITC One at ITC Grand Chola, Chennai.mp4",
    location_url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9755217892525!2d72.82214951432789!3d19.108729755909817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c99824616e79%3A0xa01db96507bcb46!2sNovotel%20Mumbai%20Juhu%20Beach!5e0!3m2!1sen!2sin!4v1632844370059!5m2!1sen!2sin",
    images: [
      "./Images/hotel9/image1.jpg",
      "./Images/hotel9/image2.jpg",
      "./Images/hotel9/image3.jpg",
    ],
  },
];

const filters = {
  destination: "",
  availableOn: null,
};
