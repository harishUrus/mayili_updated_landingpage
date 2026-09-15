export interface Testimonial {
  name: { ta: string; en: string };
  location: { ta: string; en: string };
  rating: number;
  review: { ta: string; en: string };
}

export const testimonials: Testimonial[] = [
  {
    name: { ta: "லட்சுமி", en: "Lakshmi" },
    location: { ta: "கோவை", en: "Coimbatore" },
    rating: 5,
    review: {
      ta: "என் குட்டி குழந்தைக்கு ரொம்ப பிடிக்கும். டி, காபி குடிக்க மாட்டேன் இந்த பால் ல கலந்துதான் ரொம்ப சாப்பிடுவா. ரொம்ப நல்லாக கிஸ்தர்.",
      en: "My little one loves this. She won't drink tea or coffee, but mixed in milk she finishes it happily every time. Really good quality.",
    },
  },
  {
    name: { ta: "ஜெயா", en: "Jeya" },
    location: { ta: "திண்டுக்கல்", en: "Dindigul" },
    rating: 5,
    review: {
      ta: "ருசியாகவும், சத்தானதாகவும் இருக்கு. குடிக்க சாப்பிட எளிது. சாக்லேட் + ராகி காம்பினேஷன் சூப்பர்!",
      en: "Tastes great and packed with nutrition. Super easy to prepare. The chocolate + ragi combination is fantastic!",
    },
  },
  {
    name: { ta: "மீனா", en: "Meena" },
    location: { ta: "மதுரை", en: "Madurai" },
    rating: 5,
    review: {
      ta: "என் குழந்தைனுக்கு ரொம்ப பிடிச்சிருக்கு. தினமும் பாலில் கலந்து கொடுக்கிறேன். நல்ல ஹெல்திஆன ப்ரோடக்ட்.",
      en: "My kid absolutely loves it. I mix it in milk every day. A genuinely healthy product.",
    },
  },
  {
    name: { ta: "சரவணன்", en: "Saravanan" },
    location: { ta: "சேலம்", en: "Salem" },
    rating: 5,
    review: {
      ta: "வீட்டில் அனைவருக்கும் பிடித்திருக்கிறது. காலை உணவுக்கு சிறந்த தேர்வு. நல்ல தரம், விரைவு டெலிவரி.",
      en: "Everyone at home loves it. A great choice for breakfast. Good quality and quick delivery.",
    },
  },
];
