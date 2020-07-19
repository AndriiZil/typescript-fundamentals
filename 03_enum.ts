enum MemberShip {
    Simple,
    Standard,
    Premium
}

const memberShip = MemberShip.Standard;
const memberShipReverse = MemberShip[2];

console.log(memberShip); // => 1
console.log(memberShipReverse); // => Premium

enum SocialMedia {
    Vk = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM;
console.log(social); // => INSTAGRAM
