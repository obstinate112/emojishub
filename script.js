// Main application object
const EmojiMaster = {
    // DOM Elements
    elements: {
        emojiPicker: null,
        searchInput: null,
        categoryButtons: null,
        copyNotification: null,
        skinToneOptions: null,
        tabButtons: null,
        emojiLoader: null,
        searchBtn: null,
        scrollTopBtn: null,
        mobileMenuBtn: null,
        mobileMenu: null
    },
    
    // State
    state: {
        currentCategory: 'all',
        currentSkinTone: 'default',
        currentTab: 'All Emojis',
        favorites: JSON.parse(localStorage.getItem('emojiFavorites')) || [],
        recentlyUsed: JSON.parse(localStorage.getItem('emojiRecentlyUsed')) || [],
        trendingEmojis: []
    },

    // Emoji database
    emojiDatabase: {
        all: [],
        smileys: [
            
    { unicode: '😀', name: 'Grinning Face' },
    { unicode: '😃', name: 'Grinning Face with Big Eyes' },
    { unicode: '😄', name: 'Grinning Face with Smiling Eyes' },
    { unicode: '😁', name: 'Beaming Face with Smiling Eyes' },
    { unicode: '😆', name: 'Grinning Squinting Face' },
    { unicode: '😅', name: 'Grinning Face with Sweat' },
    { unicode: '🤣', name: 'Rolling on the Floor Laughing' },
    { unicode: '😂', name: 'Face with Tears of Joy' },
    { unicode: '🙂', name: 'Slightly Smiling Face' },
    { unicode: '🙃', name: 'Upside Down Face' },
    { unicode: '😉', name: 'Winking Face' },
    { unicode: '😊', name: 'Smiling Face with Smiling Eyes' },
    { unicode: '😇', name: 'Smiling Face with Halo' },
    { unicode: '🥰', name: 'Smiling Face with Hearts' },
    { unicode: '😍', name: 'Smiling Face with Heart-Eyes' },
    { unicode: '🤩', name: 'Star-Struck' },
    { unicode: '😘', name: 'Face Blowing a Kiss' },
    { unicode: '😗', name: 'Kissing Face' },
    { unicode: '😚', name: 'Kissing Face with Closed Eyes' },
    { unicode: '😙', name: 'Kissing Face with Smiling Eyes' },
    { unicode: '🥲', name: 'Smiling Face with Tear' },
    { unicode: '😋', name: 'Face Savoring Food' },
    { unicode: '😛', name: 'Face with Tongue' },
    { unicode: '😜', name: 'Winking Face with Tongue' },
    { unicode: '🤪', name: 'Zany Face' },
    { unicode: '😝', name: 'Squinting Face with Tongue' },
    { unicode: '🤑', name: 'Money Mouth Face' },
    { unicode: '🤗', name: 'Hugging Face' },
    { unicode: '🤭', name: 'Face with Hand Over Mouth' },
    { unicode: '🤫', name: 'Shushing Face' },
    { unicode: '🤔', name: 'Thinking Face' },
    { unicode: '🤨', name: 'Face with Raised Eyebrow' },
    { unicode: '😐', name: 'Neutral Face' },
    { unicode: '😑', name: 'Expressionless Face' },
    { unicode: '😶', name: 'Face Without Mouth' },
    { unicode: '😶‍🌫️', name: 'Face in Clouds' },
    { unicode: '😏', name: 'Smirking Face' },
    { unicode: '😒', name: 'Unamused Face' },
    { unicode: '🙄', name: 'Face with Rolling Eyes' },
    { unicode: '😬', name: 'Grimacing Face' },
    { unicode: '🤥', name: 'Lying Face' },
    { unicode: '😌', name: 'Relieved Face' },
    { unicode: '😔', name: 'Pensive Face' },
    { unicode: '😪', name: 'Sleepy Face' },
    { unicode: '🤤', name: 'Drooling Face' },
    { unicode: '😴', name: 'Sleeping Face' },
    { unicode: '😷', name: 'Face with Medical Mask' },
    { unicode: '🤒', name: 'Face with Thermometer' },
    { unicode: '🤕', name: 'Face with Head Bandage' },
    { unicode: '🤢', name: 'Nauseated Face' },
    { unicode: '🤮', name: 'Face Vomiting' },
    { unicode: '🤧', name: 'Sneezing Face' },
    { unicode: '🥵', name: 'Hot Face' },
    { unicode: '🥶', name: 'Cold Face' },
    { unicode: '🥴', name: 'Woozy Face' },
    { unicode: '😵', name: 'Dizzy Face' },
    { unicode: '😵‍💫', name: 'Face with Spiral Eyes' },
    { unicode: '🤯', name: 'Exploding Head' },
    { unicode: '🤠', name: 'Cowboy Hat Face' },
    { unicode: '🥳', name: 'Partying Face' },
    { unicode: '🤓', name: 'Disguised Face' },
    { unicode: '😎', name: 'Smiling Face with Sunglasses' },
    { unicode: '🤓', name: 'Nerd Face' },
    { unicode: '🧐', name: 'Face with Monocle' },
    { unicode: '😕', name: 'Confused Face' },
    { unicode: '😟', name: 'Worried Face' },
    { unicode: '🙁', name: 'Slightly Frowning Face' },
    { unicode: '😮', name: 'Face with Open Mouth' },
    { unicode: '😯', name: 'Hushed Face' },
    { unicode: '😲', name: 'Astonished Face' },
    { unicode: '😳', name: 'Flushed Face' },
    { unicode: '🥺', name: 'Pleading Face' },
    { unicode: '😦', name: 'Frowning Face with Open Mouth' },
    { unicode: '😧', name: 'Anguished Face' },
    { unicode: '😨', name: 'Fearful Face' },
    { unicode: '😰', name: 'Anxious Face with Sweat' },
    { unicode: '😥', name: 'Sad but Relieved Face' },
    { unicode: '😢', name: 'Crying Face' },
    { unicode: '😭', name: 'Loudly Crying Face' },
    { unicode: '😱', name: 'Face Screaming in Fear' },
    { unicode: '😖', name: 'Confounded Face' },
    { unicode: '😣', name: 'Persevering Face' },
    { unicode: '😞', name: 'Disappointed Face' },
    { unicode: '😓', name: 'Downcast Face with Sweat' },
    { unicode: '😩', name: 'Weary Face' },
    { unicode: '😫', name: 'Tired Face' },
    { unicode: '🥱', name: 'Yawning Face' },
    { unicode: '😤', name: 'Face with Steam from Nose' },
    { unicode: '😡', name: 'Pouting Face' },
    { unicode: '😠', name: 'Angry Face' },
    { unicode: '🤬', name: 'Face with Symbols on Mouth' },
    { unicode: '😈', name: 'Smiling Face with Horns' },
    { unicode: '👿', name: 'Angry Face with Horns' },
    { unicode: '💀', name: 'Skull' },
    { unicode: '☠️', name: 'Skull and Crossbones' },
    { unicode: '💩', name: 'Pile of Poo' },
    { unicode: '🤡', name: 'Clown Face' },
    { unicode: '👹', name: 'Ogre' },
    { unicode: '👺', name: 'Goblin' },
    { unicode: '👻', name: 'Ghost' },
    { unicode: '👽', name: 'Alien' },
    { unicode: '👾', name: 'Alien Monster' },
    { unicode: '🤖', name: 'Robot' },
    { unicode: '😺', name: 'Grinning Cat' },
    { unicode: '😸', name: 'Grinning Cat with Smiling Eyes' },
    { unicode: '😹', name: 'Cat with Tears of Joy' },
    { unicode: '😻', name: 'Smiling Cat with Heart-Eyes' },
    { unicode: '😼', name: 'Cat with Wry Smile' },
    { unicode: '😽', name: 'Kissing Cat' },
    { unicode: '🙀', name: 'Weary Cat' },
    { unicode: '😿', name: 'Crying Cat' },
    { unicode: '😾', name: 'Pouting Cat' },

            // Add more smileys here
],
        people: [
            
    // Hands & Gestures
    { unicode: '👋', name: 'Waving Hand' },
    { unicode: '🤚', name: 'Raised Back of Hand' },
    { unicode: '🖐️', name: 'Hand with Fingers Splayed' },
    { unicode: '✋', name: 'Raised Hand' },
    { unicode: '🖖', name: 'Vulcan Salute' },
    { unicode: '👌', name: 'OK Hand' },
    { unicode: '🤌', name: 'Pinched Fingers' },
    { unicode: '🤏', name: 'Pinching Hand' },
    { unicode: '✌️', name: 'Victory Hand' },
    { unicode: '🤞', name: 'Crossed Fingers' },
    { unicode: '🤟', name: 'Love-You Gesture' },
    { unicode: '🤘', name: 'Sign of the Horns' },
    { unicode: '🤙', name: 'Call Me Hand' },
    { unicode: '👈', name: 'Backhand Index Pointing Left' },
    { unicode: '👉', name: 'Backhand Index Pointing Right' },
    { unicode: '👆', name: 'Backhand Index Pointing Up' },
    { unicode: '🖕', name: 'Middle Finger' },
    { unicode: '👇', name: 'Backhand Index Pointing Down' },
    { unicode: '☝️', name: 'Index Pointing Up' },
    { unicode: '👍', name: 'Thumbs Up' },
    { unicode: '👎', name: 'Thumbs Down' },
    { unicode: '✊', name: 'Raised Fist' },
    { unicode: '👊', name: 'Oncoming Fist' },
    { unicode: '🤛', name: 'Left Facing Fist' },
    { unicode: '🤜', name: 'Right Facing Fist' },
    { unicode: '👏', name: 'Clapping Hands' },
    { unicode: '🙌', name: 'Raising Hands' },
    { unicode: '👐', name: 'Open Hands' },
    { unicode: '🤲', name: 'Palms Up Together' },
    { unicode: '🤝', name: 'Handshake' },
    { unicode: '🙏', name: 'Folded Hands' },
    { unicode: '✍️', name: 'Writing Hand' },
    { unicode: '💅', name: 'Nail Polish' },
    { unicode: '🤳', name: 'Selfie' },
    { unicode: '💪', name: 'Flexed Biceps' },
    { unicode: '🦾', name: 'Mechanical Arm' },
    { unicode: '🦿', name: 'Mechanical Leg' },
    { unicode: '🦵', name: 'Leg' },
    { unicode: '🦶', name: 'Foot' },
    { unicode: '👂', name: 'Ear' },
    { unicode: '🦻', name: 'Ear with Hearing Aid' },
    { unicode: '👃', name: 'Nose' },
    { unicode: '🧠', name: 'Brain' },
    { unicode: '🫀', name: 'Anatomical Heart' },
    { unicode: '🫁', name: 'Lungs' },
    { unicode: '🦷', name: 'Tooth' },
    { unicode: '🦴', name: 'Bone' },
    { unicode: '👀', name: 'Eyes' },
    { unicode: '👁️', name: 'Eye' },
    { unicode: '👅', name: 'Tongue' },
    { unicode: '👄', name: 'Mouth' },
    { unicode: '🫦', name: 'Biting Lip' },
    { unicode: '👶', name: 'Baby' },
    { unicode: '🧒', name: 'Child' },
    { unicode: '👦', name: 'Boy' },
    { unicode: '👧', name: 'Girl' },
    { unicode: '🧑', name: 'Person' },
    { unicode: '👱', name: 'Blonde Person' },
    { unicode: '👨', name: 'Man' },
    { unicode: '🧔', name: 'Bearded Person' },
    { unicode: '🧔‍♂️', name: 'Man: Beard' },
    { unicode: '🧔‍♀️', name: 'Woman: Beard' },
    { unicode: '👨‍🦰', name: 'Man: Red Hair' },
    { unicode: '👨‍🦱', name: 'Man: Curly Hair' },
    { unicode: '👨‍🦳', name: 'Man: White Hair' },
    { unicode: '👨‍🦲', name: 'Man: Bald' },
    { unicode: '👩', name: 'Woman' },
    { unicode: '👩‍🦰', name: 'Woman: Red Hair' },
    { unicode: '👩‍🦱', name: 'Woman: Curly Hair' },
    { unicode: '👩‍🦳', name: 'Woman: White Hair' },
    { unicode: '👩‍🦲', name: 'Woman: Bald' },
    { unicode: '🧓', name: 'Older Person' },
    { unicode: '👴', name: 'Old Man' },
    { unicode: '👵', name: 'Old Woman' },
    { unicode: '🙍', name: 'Person Frowning' },
    { unicode: '🙍‍♂️', name: 'Man Frowning' },
    { unicode: '🙍‍♀️', name: 'Woman Frowning' },
    { unicode: '🙎', name: 'Person Pouting' },
    { unicode: '🙎‍♂️', name: 'Man Pouting' },
    { unicode: '🙎‍♀️', name: 'Woman Pouting' },
    { unicode: '🙅', name: 'Person Gesturing No' },
    { unicode: '🙅‍♂️', name: 'Man Gesturing No' },
    { unicode: '🙅‍♀️', name: 'Woman Gesturing No' },
    { unicode: '🙆', name: 'Person Gesturing OK' },
    { unicode: '🙆‍♂️', name: 'Man Gesturing OK' },
    { unicode: '🙆‍♀️', name: 'Woman Gesturing OK' },
    { unicode: '💁', name: 'Person Tipping Hand' },
    { unicode: '💁‍♂️', name: 'Man Tipping Hand' },
    { unicode: '💁‍♀️', name: 'Woman Tipping Hand' },
    { unicode: '🙋', name: 'Person Raising Hand' },
    { unicode: '🙋‍♂️', name: 'Man Raising Hand' },
    { unicode: '🙋‍♀️', name: 'Woman Raising Hand' },
    { unicode: '🧏', name: 'Deaf Person' },
    { unicode: '🧏‍♂️', name: 'Deaf Man' },
    { unicode: '🧏‍♀️', name: 'Deaf Woman' },
    { unicode: '🙇', name: 'Person Bowing' },
    { unicode: '🙇‍♂️', name: 'Man Bowing' },
    { unicode: '🙇‍♀️', name: 'Woman Bowing' },
    { unicode: '🤦', name: 'Person Facepalming' },
    { unicode: '🤦‍♂️', name: 'Man Facepalming' },
    { unicode: '🤦‍♀️', name: 'Woman Facepalming' },
    { unicode: '🤷', name: 'Person Shrugging' },
    { unicode: '🤷‍♂️', name: 'Man Shrugging' },
    { unicode: '🤷‍♀️', name: 'Woman Shrugging' },
    { unicode: '👮', name: 'Police Officer' },
    { unicode: '👮‍♂️', name: 'Man Police Officer' },
    { unicode: '👮‍♀️', name: 'Woman Police Officer' },
    { unicode: '🕵️', name: 'Detective' },
    { unicode: '🕵️‍♂️', name: 'Man Detective' },
    { unicode: '🕵️‍♀️', name: 'Woman Detective' },
    { unicode: '💂', name: 'Guard' },
    { unicode: '💂‍♂️', name: 'Man Guard' },
    { unicode: '💂‍♀️', name: 'Woman Guard' },
    { unicode: '🥷', name: 'Ninja' },
    { unicode: '👷', name: 'Construction Worker' },
    { unicode: '👷‍♂️', name: 'Man Construction Worker' },
    { unicode: '👷‍♀️', name: 'Woman Construction Worker' },
    { unicode: '🤴', name: 'Prince' },
    { unicode: '👸', name: 'Princess' },
    { unicode: '👳', name: 'Person Wearing Turban' },
    { unicode: '👳‍♂️', name: 'Man Wearing Turban' },
    { unicode: '👳‍♀️', name: 'Woman Wearing Turban' },
    { unicode: '👲', name: 'Person with Skullcap' },
    { unicode: '🧕', name: 'Woman with Headscarf' },
    { unicode: '🤵', name: 'Person in Tuxedo' },
    { unicode: '🤵‍♂️', name: 'Man in Tuxedo' },
    { unicode: '🤵‍♀️', name: 'Woman in Tuxedo' },
    { unicode: '👰', name: 'Person with Veil' },
    { unicode: '👰‍♂️', name: 'Man with Veil' },
    { unicode: '👰‍♀️', name: 'Woman with Veil' },
    { unicode: '🤰', name: 'Pregnant Woman' },
    { unicode: '🫄', name: 'Pregnant Person' },
    { unicode: '🫃', name: 'Pregnant Man' },
    { unicode: '🤱', name: 'Breast Feeding' },
    { unicode: '👩‍🍼', name: 'Woman Feeding Baby' },
    { unicode: '👨‍🍼', name: 'Man Feeding Baby' },
    { unicode: '🧑‍🍼', name: 'Person Feeding Baby' },
    { unicode: '👼', name: 'Baby Angel' },
    { unicode: '🎅', name: 'Santa Claus' },
    { unicode: '🤶', name: 'Mrs. Claus' },
    { unicode: '🧑‍🎄', name: 'Mx Claus' },
    { unicode: '🦸', name: 'Superhero' },
    { unicode: '🦸‍♂️', name: 'Man Superhero' },
    { unicode: '🦸‍♀️', name: 'Woman Superhero' },
    { unicode: '🦹', name: 'Supervillain' },
    { unicode: '🦹‍♂️', name: 'Man Supervillain' },
    { unicode: '🦹‍♀️', name: 'Woman Supervillain' },
    { unicode: '🧙', name: 'Mage' },
    { unicode: '🧙‍♂️', name: 'Man Mage' },
    { unicode: '🧙‍♀️', name: 'Woman Mage' },
    { unicode: '🧚', name: 'Fairy' },
    { unicode: '🧚‍♂️', name: 'Man Fairy' },
    { unicode: '🧚‍♀️', name: 'Woman Fairy' },
    { unicode: '🧛', name: 'Vampire' },
    { unicode: '🧛‍♂️', name: 'Man Vampire' },
    { unicode: '🧛‍♀️', name: 'Woman Vampire' },
    { unicode: '🧜', name: 'Merperson' },
    { unicode: '🧜‍♂️', name: 'Merman' },
    { unicode: '🧜‍♀️', name: 'Mermaid' },
    { unicode: '🧝', name: 'Elf' },
    { unicode: '🧝‍♂️', name: 'Man Elf' },
    { unicode: '🧝‍♀️', name: 'Woman Elf' },
    { unicode: '🧞', name: 'Genie' },
    { unicode: '🧞‍♂️', name: 'Man Genie' },
    { unicode: '🧞‍♀️', name: 'Woman Genie' },
    { unicode: '🧟', name: 'Zombie' },
    { unicode: '🧟‍♂️', name: 'Man Zombie' },
    { unicode: '🧟‍♀️', name: 'Woman Zombie' },
    { unicode: '🧌', name: 'Troll' },
    { unicode: '💆', name: 'Person Getting Massage' },
    { unicode: '💆‍♂️', name: 'Man Getting Massage' },
    { unicode: '💆‍♀️', name: 'Woman Getting Massage' },
    { unicode: '💇', name: 'Person Getting Haircut' },
    { unicode: '💇‍♂️', name: 'Man Getting Haircut' },
    { unicode: '💇‍♀️', name: 'Woman Getting Haircut' },
    { unicode: '🚶', name: 'Person Walking' },
    { unicode: '🚶‍♂️', name: 'Man Walking' },
    { unicode: '🚶‍♀️', name: 'Woman Walking' },
    { unicode: '🧍', name: 'Person Standing' },
    { unicode: '🧍‍♂️', name: 'Man Standing' },
    { unicode: '🧍‍♀️', name: 'Woman Standing' },
    { unicode: '🧎', name: 'Person Kneeling' },
    { unicode: '🧎‍♂️', name: 'Man Kneeling' },
    { unicode: '🧎‍♀️', name: 'Woman Kneeling' },
    { unicode: '🏃', name: 'Person Running' },
    { unicode: '🏃‍♂️', name: 'Man Running' },
    { unicode: '🏃‍♀️', name: 'Woman Running' },
    { unicode: '💃', name: 'Woman Dancing' },
    { unicode: '🕺', name: 'Man Dancing' },
    { unicode: '🕴️', name: 'Person in Suit Levitating' },
    { unicode: '👯', name: 'People with Bunny Ears' },
    { unicode: '👯‍♂️', name: 'Men with Bunny Ears' },
    { unicode: '👯‍♀️', name: 'Women with Bunny Ears' },
    { unicode: '🧖', name: 'Person in Steamy Room' },
    { unicode: '🧖‍♂️', name: 'Man in Steamy Room' },
    { unicode: '🧖‍♀️', name: 'Woman in Steamy Room' },
    { unicode: '🧗', name: 'Person Climbing' },
    { unicode: '🧗‍♂️', name: 'Man Climbing' },
    { unicode: '🧗‍♀️', name: 'Woman Climbing' },
    { unicode: '🤺', name: 'Person Fencing' },
    { unicode: '🏇', name: 'Horse Racing' },
    { unicode: '⛷️', name: 'Skier' },
    { unicode: '🏂', name: 'Snowboarder' },
    { unicode: '🏌️', name: 'Person Golfing' },
    { unicode: '🏌️‍♂️', name: 'Man Golfing' },
    { unicode: '🏌️‍♀️', name: 'Woman Golfing' },
    { unicode: '🏄', name: 'Person Surfing' },
    { unicode: '🏄‍♂️', name: 'Man Surfing' },
    { unicode: '🏄‍♀️', name: 'Woman Surfing' },
    { unicode: '🚣', name: 'Person Rowing Boat' },
    { unicode: '🚣‍♂️', name: 'Man Rowing Boat' },
    { unicode: '🚣‍♀️', name: 'Woman Rowing Boat' },
    { unicode: '🏊', name: 'Person Swimming' },
    { unicode: '🏊‍♂️', name: 'Man Swimming' },
    { unicode: '🏊‍♀️', name: 'Woman Swimming' },
    { unicode: '⛹️', name: 'Person Bouncing Ball' },
    { unicode: '⛹️‍♂️', name: 'Man Bouncing Ball' },
    { unicode: '⛹️‍♀️', name: 'Woman Bouncing Ball' },
    { unicode: '🏋️', name: 'Person Lifting Weights' },
    { unicode: '🏋️‍♂️', name: 'Man Lifting Weights' },
    { unicode: '🏋️‍♀️', name: 'Woman Lifting Weights' },
    { unicode: '🚴', name: 'Person Biking' },
    { unicode: '🚴‍♂️', name: 'Man Biking' },
    { unicode: '🚴‍♀️', name: 'Woman Biking' },
    { unicode: '🚵', name: 'Person Mountain Biking' },
    { unicode: '🚵‍♂️', name: 'Man Mountain Biking' },
    { unicode: '🚵‍♀️', name: 'Woman Mountain Biking' },
    { unicode: '🤸', name: 'Person Cartwheeling' },
    { unicode: '🤸‍♂️', name: 'Man Cartwheeling' },
    { unicode: '🤸‍♀️', name: 'Woman Cartwheeling' },
    { unicode: '🤼', name: 'People Wrestling' },
    { unicode: '🤼‍♂️', name: 'Men Wrestling' },
    { unicode: '🤼‍♀️', name: 'Women Wrestling' },
    { unicode: '🤽', name: 'Person Playing Water Polo' },
    { unicode: '🤽‍♂️', name: 'Man Playing Water Polo' },
    { unicode: '🤽‍♀️', name: 'Woman Playing Water Polo' },
    { unicode: '🤾', name: 'Person Playing Handball' },
    { unicode: '🤾‍♂️', name: 'Man Playing Handball' },
    { unicode: '🤾‍♀️', name: 'Woman Playing Handball' },
    { unicode: '🤹', name: 'Person Juggling' },
    { unicode: '🤹‍♂️', name: 'Man Juggling' },
    { unicode: '🤹‍♀️', name: 'Woman Juggling' },
    { unicode: '🧘', name: 'Person in Lotus Position' },
    { unicode: '🧘‍♂️', name: 'Man in Lotus Position' },
    { unicode: '🧘‍♀️', name: 'Woman in Lotus Position' },
    { unicode: '🛀', name: 'Person Taking Bath' },
    { unicode: '🛌', name: 'Person in Bed' },
    { unicode: '🧑‍🤝‍🧑', name: 'People Holding Hands' },
    { unicode: '👭', name: 'Women Holding Hands' },
    { unicode: '👫', name: 'Woman and Man Holding Hands' },
    { unicode: '👬', name: 'Men Holding Hands' },
    { unicode: '💏', name: 'Kiss' },
    { unicode: '👩‍❤️‍💋‍👨', name: 'Kiss: Woman and Man' },
    { unicode: '👨‍❤️‍💋‍👨', name: 'Kiss: Man and Man' },
    { unicode: '👩‍❤️‍💋‍👩', name: 'Kiss: Woman and Woman' },
    { unicode: '💑', name: 'Couple with Heart' },
    { unicode: '👩‍❤️‍👨', name: 'Couple with Heart: Woman and Man' },
    { unicode: '👨‍❤️‍👨', name: 'Couple with Heart: Man and Man' },
    { unicode: '👩‍❤️‍👩', name: 'Couple with Heart: Woman and Woman' },
    { unicode: '👪', name: 'Family' },
    { unicode: '👨‍👩‍👦', name: 'Family: Man, Woman, and Boy' },
    { unicode: '👨‍👩‍👧', name: 'Family: Man, Woman, and Girl' },
    { unicode: '👨‍👩‍👧‍👦', name: 'Family: Man, Woman, Girl, and Boy' },
    { unicode: '👨‍👩‍👦‍👦', name: 'Family: Man, Woman, and Two Boys' },
    { unicode: '👨‍👩‍👧‍👧', name: 'Family: Man, Woman, and Two Girls' },
    { unicode: '👨‍👨‍👦', name: 'Family: Two Men and Boy' },
    { unicode: '👨‍👨‍👧', name: 'Family: Two Men and Girl' },
    { unicode: '👨‍👨‍👧‍👦', name: 'Family: Two Men, Girl, and Boy' },
    { unicode: '👨‍👨‍👦‍👦', name: 'Family: Two Men and Two Boys' },
    { unicode: '👨‍👨‍👧‍👧', name: 'Family: Two Men and Two Girls' },
    { unicode: '👩‍👩‍👦', name: 'Family: Two Women and Boy' },
    { unicode: '👩‍👩‍👧', name: 'Family: Two Women and Girl' },
    { unicode: '👩‍👩‍👧‍👦', name: 'Family: Two Women, Girl, and Boy' },
    { unicode: '👩‍👩‍👦‍👦', name: 'Family: Two Women and Two Boys' },
    { unicode: '👩‍👩‍👧‍👧', name: 'Family: Two Women and Two Girls' },
    { unicode: '👨‍👦', name: 'Family: Man and Boy' },
    { unicode: '👨‍👦‍👦', name: 'Family: Man and Two Boys' },
    { unicode: '👨‍👧', name: 'Family: Man and Girl' },
    { unicode: '👨‍👧‍👦', name: 'Family: Man, Girl, and Boy' },
    { unicode: '👨‍👧‍👧', name: 'Family: Man and Two Girls' },
    { unicode: '👩‍👦', name: 'Family: Woman and Boy' },
    { unicode: '👩‍👦‍👦', name: 'Family: Woman and Two Boys' },
    { unicode: '👩‍👧', name: 'Family: Woman and Girl' },
    { unicode: '👩‍👧‍👦', name: 'Family: Woman, Girl, and Boy' },
    { unicode: '👩‍👧‍👧', name: 'Family: Woman and Two Girls' },
    { unicode: '🗣️', name: 'Speaking Head' },
    { unicode: '👤', name: 'Bust in Silhouette' },
    { unicode: '👥', name: 'Busts in Silhouette' },
    { unicode: '👣', name: 'Footprints' }

            // Add more people here
        ],
        animals: [
           
    { unicode: '🐵', name: 'Monkey Face' },
    { unicode: '🐒', name: 'Monkey' },
    { unicode: '🦍', name: 'Gorilla' },
    { unicode: '🦧', name: 'Orangutan' },
    { unicode: '🐶', name: 'Dog Face' },
    { unicode: '🐕', name: 'Dog' },
    { unicode: '🦮', name: 'Guide Dog' },
    { unicode: '🐕‍🦺', name: 'Service Dog' },
    { unicode: '🐩', name: 'Poodle' },
    { unicode: '🐺', name: 'Wolf Face' },
    { unicode: '🦊', name: 'Fox Face' },
    { unicode: '🦝', name: 'Raccoon' },
    { unicode: '🐱', name: 'Cat Face' },
    { unicode: '🐈', name: 'Cat' },
    { unicode: '🐈⬛', name: 'Black Cat' },
    { unicode: '🦁', name: 'Lion Face' },
    { unicode: '🐯', name: 'Tiger Face' },
    { unicode: '🐅', name: 'Tiger' },
    { unicode: '🐆', name: 'Leopard' },
    { unicode: '🐴', name: 'Horse Face' },
    { unicode: '🐀', name: 'Moose' },
    { unicode: '🐎', name: 'Horse' },
    { unicode: '🦄', name: 'Unicorn' },
    { unicode: '🦓', name: 'Zebra' },
    { unicode: '🦌', name: 'Deer' },
    { unicode: '🐮', name: 'Cow Face' },
    { unicode: '🐂', name: 'Ox' },
    { unicode: '🐃', name: 'Water Buffalo' },
    { unicode: '🐄', name: 'Cow' },
    { unicode: '🐷', name: 'Pig Face' },
    { unicode: '🐖', name: 'Pig' },
    { unicode: '🐗', name: 'Boar' },
    { unicode: '🐽', name: 'Pig Nose' },
    { unicode: '🐏', name: 'Ram' },
    { unicode: '🐑', name: 'Sheep' },
    { unicode: '🐐', name: 'Goat' },
    { unicode: '🐪', name: 'Camel' },
    { unicode: '🐫', name: 'Two-Hump Camel' },
    { unicode: '🦙', name: 'Llama' },
    { unicode: '🦒', name: 'Giraffe' },
    { unicode: '🐘', name: 'Elephant' },
    { unicode: '🦏', name: 'Rhinoceros' },
    { unicode: '🦛', name: 'Hippopotamus' },
    { unicode: '🐭', name: 'Mouse Face' },
    { unicode: '🐁', name: 'Mouse' },
    { unicode: '🐀', name: 'Rat' },
    { unicode: '🐹', name: 'Hamster Face' },
    { unicode: '🐰', name: 'Rabbit Face' },
    { unicode: '🐇', name: 'Rabbit' },
    { unicode: '🐿️', name: 'Chipmunk' },
    { unicode: '🦔', name: 'Hedgehog' },
    { unicode: '🦇', name: 'Bat' },
    { unicode: '🐻', name: 'Bear Face' },
    { unicode: '🐻‍❄️', name: 'Polar Bear' },
    { unicode: '🐨', name: 'Koala' },
    { unicode: '🐼', name: 'Panda Face' },
    { unicode: '🦥', name: 'Sloth' },
    { unicode: '🦦', name: 'Otter' },
    { unicode: '🦨', name: 'Skunk' },
    { unicode: '🦘', name: 'Kangaroo' },
    { unicode: '🦡', name: 'Badger' },
    { unicode: '🐾', name: 'Paw Prints' },
    { unicode: '🦃', name: 'Turkey' },
    { unicode: '🐔', name: 'Chicken' },
    { unicode: '🐓', name: 'Rooster' },
    { unicode: '🐣', name: 'Hatching Chick' },
    { unicode: '🐤', name: 'Baby Chick' },
    { unicode: '🐥', name: 'Front Facing Baby Chick' },
    { unicode: '🐦', name: 'Bird' },
    { unicode: '🐧', name: 'Penguin' },
    { unicode: '🕊️', name: 'Dove' },
    { unicode: '🦅', name: 'Eagle' },
    { unicode: '🦆', name: 'Duck' },
    { unicode: '🦢', name: 'Swan' },
    { unicode: '🦉', name: 'Owl' },
    { unicode: '🦩', name: 'Flamingo' },
    { unicode: '🦚', name: 'Peacock' },
    { unicode: '🦜', name: 'Parrot' },
    { unicode: '🐦⬛', name: 'Black Bird' },
    { unicode: '🐦🔥', name: 'Phoenix' },
    { unicode: '🐳', name: 'Spouting Whale' },
    { unicode: '🐋', name: 'Whale' },
    { unicode: '🐬', name: 'Dolphin' },
    { unicode: '🐟', name: 'Fish' },
    { unicode: '🐠', name: 'Tropical Fish' },
    { unicode: '🐡', name: 'Blowfish' },
    { unicode: '🦈', name: 'Shark' },
    { unicode: '🐙', name: 'Octopus' },
    { unicode: '🐚', name: 'Spiral Shell' },
    { unicode: '🦀', name: 'Crab' },
    { unicode: '🦐', name: 'Shrimp' },
    { unicode: '🦑', name: 'Squid' }, 
    { unicode: '🐊', name: 'Crocodile' },
    { unicode: '🐢', name: 'Turtle' },
    { unicode: '🦎', name: 'Lizard' },
    { unicode: '🐍', name: 'Snake' },
    { unicode: '🐲', name: 'Dragon Face' },
    { unicode: '🐉', name: 'Dragon' },
    { unicode: '🦕', name: 'Sauropod' },
    { unicode: '🦖', name: 'T-Rex' },
    { unicode: '🐸', name: 'Frog' },
    { unicode: '🐌', name: 'Snail' },
    { unicode: '🦋', name: 'Butterfly' },
    { unicode: '🐛', name: 'Bug' },
    { unicode: '🐜', name: 'Ant' },
    { unicode: '🐝', name: 'Honeybee' },
    { unicode: '🐞', name: 'Lady Beetle' },
    { unicode: '🦗', name: 'Cricket' },
    { unicode: '🕷️', name: 'Spider' },
    { unicode: '🕸️', name: 'Spider Web' },
    { unicode: '🦂', name: 'Scorpion' },
    { unicode: '🦟', name: 'Mosquito' },
    { unicode: '🦠', name: 'Microbe' }, 
    { unicode: '🦄', name: 'Unicorn' },
    { unicode: '🐉', name: 'Dragon' },
    { unicode: '🦕', name: 'Sauropod' },
    { unicode: '🦖', name: 'T-Rex' },
            // Add more animals here
        ],
        food: [
            { unicode: '🍎', name: 'Red Apple' },
            { unicode: '🍕', name: 'Pizza' },
            { unicode: '🍔', name: 'Hamburger' },
            // Fruits
    { unicode: '🍏', name: 'Green Apple' },
    { unicode: '🍎', name: 'Red Apple' },
    { unicode: '🍐', name: 'Pear' },
    { unicode: '🍊', name: 'Tangerine' },
    { unicode: '🍋', name: 'Lemon' },
    { unicode: '🍌', name: 'Banana' },
    { unicode: '🍉', name: 'Watermelon' },
    { unicode: '🍇', name: 'Grapes' },
    { unicode: '🍓', name: 'Strawberry' },
    { unicode: '🍈', name: 'Melon' },
    { unicode: '🍒', name: 'Cherries' },
    { unicode: '🍑', name: 'Peach' },
    { unicode: '🥭', name: 'Mango' },
    { unicode: '🍍', name: 'Pineapple' },
    { unicode: '🥥', name: 'Coconut' },
    { unicode: '🥝', name: 'Kiwi Fruit' },
    { unicode: '🍅', name: 'Tomato' },
    { unicode: '🍆', name: 'Eggplant' },
    { unicode: '🥑', name: 'Avocado' },

    // Vegetables
    { unicode: '🥦', name: 'Broccoli' },
    { unicode: '🥬', name: 'Leafy Green' },
    { unicode: '🥒', name: 'Cucumber' },
    { unicode: '🌶️', name: 'Hot Pepper' },
    { unicode: '🌽', name: 'Corn' },
    { unicode: '🥕', name: 'Carrot' },
    { unicode: '🧄', name: 'Garlic' },
    { unicode: '🧅', name: 'Onion' },
    { unicode: '🥔', name: 'Potato' },
    { unicode: '🍠', name: 'Roasted Sweet Potato' },
    { unicode: '🥗', name: 'Green Salad' },


    // Baked Goods & Grains
    { unicode: '🥐', name: 'Croissant' },
    { unicode: '🥯', name: 'Bagel' },
    { unicode: '🍞', name: 'Bread' },
    { unicode: '🥖', name: 'Baguette' },
    { unicode: '🥨', name: 'Pretzel' },
    { unicode: '🥞', name: 'Pancakes' },
    { unicode: '🧇', name: 'Waffle' },
    { unicode: '🍪', name: 'Cookie' },
    { unicode: '🥧', name: 'Pie' },
    { unicode: '🍩', name: 'Doughnut' },
    { unicode: '🍰', name: 'Shortcake' },
    { unicode: '🎂', name: 'Birthday Cake' },
    { unicode: '🧁', name: 'Cupcake' },
    { unicode: '🥮', name: 'Moon Cake' },
    { unicode: '🍫', name: 'Chocolate Bar' },
    { unicode: '🍬', name: 'Candy' },
    { unicode: '🍭', name: 'Lollipop' },
    { unicode: '🍮', name: 'Custard' },
    { unicode: '🍯', name: 'Honey Pot' },

    // Dairy & Meat
    { unicode: '🧀', name: 'Cheese' },
    { unicode: '🥚', name: 'Egg' },
    { unicode: '🍳', name: 'Cooking' },
    { unicode: '🧈', name: 'Butter' },
    { unicode: '🥓', name: 'Bacon' },
    { unicode: '🥩', name: 'Steak' },
    { unicode: '🍗', name: 'Poultry Leg' },
    { unicode: '🍖', name: 'Meat on Bone' },
    { unicode: '🦴', name: 'Bone' },
    { unicode: '🥘', name: 'Shallow Pan of Food' },
    { unicode: '🍲', name: 'Pot of Food' },

    // Fast Food & Prepared Dishes
    { unicode: '🍔', name: 'Hamburger' },
    { unicode: '🍟', name: 'French Fries' },
    { unicode: '🍕', name: 'Pizza' },
    { unicode: '🌭', name: 'Hot Dog' },
    { unicode: '🥪', name: 'Sandwich' },
    { unicode: '🌮', name: 'Taco' },
    { unicode: '🌯', name: 'Burrito' },
    { unicode: '🥙', name: 'Stuffed Flatbread' },
    { unicode: '🧆', name: 'Falafel' },
    { unicode: '🍤', name: 'Fried Shrimp' },
    { unicode: '🍣', name: 'Sushi' },
    { unicode: '🍱', name: 'Bento Box' },
    { unicode: '🍛', name: 'Curry Rice' },
    { unicode: '🍜', name: 'Steaming Bowl' },
    { unicode: '🍝', name: 'Spaghetti' },
    { unicode: '🍢', name: 'Oden' },
    { unicode: '🍙', name: 'Rice Ball' },
    { unicode: '🍚', name: 'Cooked Rice' },
    { unicode: '🍘', name: 'Rice Cracker' },

    // Seafood
    { unicode: '🐟', name: 'Fish' },
    { unicode: '🐠', name: 'Tropical Fish' },
    { unicode: '🐡', name: 'Blowfish' },
    { unicode: '🦀', name: 'Crab' },
    { unicode: '🦞', name: 'Lobster' },
    { unicode: '🦐', name: 'Shrimp' },
    { unicode: '🦑', name: 'Squid' },
    { unicode: '🦪', name: 'Oyster' },

    // Drinks
    { unicode: '🍶', name: 'Sake' },
    { unicode: '🍾', name: 'Champagne' },
    { unicode: '🍷', name: 'Wine Glass' },
    { unicode: '🍸', name: 'Cocktail Glass' },
    { unicode: '🍹', name: 'Tropical Drink' },
    { unicode: '🍺', name: 'Beer Mug' },
    { unicode: '🍻', name: 'Clinking Beer Mugs' },
    { unicode: '🥂', name: 'Clinking Glasses' },
    { unicode: '🥃', name: 'Tumbler Glass' },
    { unicode: '🍵', name: 'Teacup' },
    { unicode: '☕', name: 'Hot Beverage' },
    { unicode: '🧃', name: 'Juice Box' },
    { unicode: '🥤', name: 'Cup with Straw' },
    { unicode: '🧊', name: 'Ice' },
    { unicode: '🥛', name: 'Glass of Milk' },
    { unicode: '🧉', name: 'Mate' },

    // Utensils & Tableware
    { unicode: '🍴', name: 'Fork and Knife' },
    { unicode: '🥄', name: 'Spoon' },
    { unicode: '🔪', name: 'Kitchen Knife' },
    { unicode: '🏺', name: 'Amphora' },
    { unicode: '🍽️', name: 'Fork and Knife with Plate' },
    { unicode: '🥣', name: 'Bowl with Spoon' },
    { unicode: '🥡', name: 'Takeout Box' },
    { unicode: '🧂', name: 'Salt' },
    { unicode: '🧊', name: 'Ice' },
    { unicode: '🧉', name: 'Mate' },
    { unicode: '🧆', name: 'Falafel' },

    // Additional Food Items
    { unicode: '🥫', name: 'Canned Food' },
    { unicode: '🍿', name: 'Popcorn' },
    { unicode: '🧈', name: 'Butter' },
    { unicode: '🥜', name: 'Peanuts' },
    { unicode: '🌰', name: 'Chestnut' },
    { unicode: '🍯', name: 'Honey Pot' },
    { unicode: '🍼', name: 'Baby Bottle' },
    { unicode: '🥤', name: 'Cup with Straw' },
    { unicode: '🧃', name: 'Juice Box' },
    { unicode: '🧊', name: 'Ice' },
    { unicode: '🥢', name: 'Chopsticks' },
    { unicode: '🍶', name: 'Sake' },
    { unicode: '🍾', name: 'Champagne' },
    { unicode: '🍷', name: 'Wine Glass' },
    { unicode: '🍸', name: 'Cocktail Glass' },
    { unicode: '🍹', name: 'Tropical Drink' },
    { unicode: '🍺', name: 'Beer Mug' },
    { unicode: '🍻', name: 'Clinking Beer Mugs' },
    { unicode: '🥂', name: 'Clinking Glasses' },
    { unicode: '🥃', name: 'Tumbler Glass' },
    { unicode: '🍵', name: 'Teacup' },
    { unicode: '☕', name: 'Hot Beverage' },
    { unicode: '🧃', name: 'Juice Box' },
    { unicode: '🥤', name: 'Cup with Straw' },
    { unicode: '🧊', name: 'Ice' },
    { unicode: '🥛', name: 'Glass of Milk' }
            // Add more food here
        ],
        travel: [
            
    // Transportation
    { unicode: '✈️', name: 'Airplane' },
    { unicode: '🛫', name: 'Airplane Departure' },
    { unicode: '🛬', name: 'Airplane Arrival' },
    { unicode: '🛩️', name: 'Small Airplane' },
    { unicode: '🚁', name: 'Helicopter' },
    { unicode: '🛸', name: 'Flying Saucer' },
    { unicode: '🚀', name: 'Rocket' },
    { unicode: '🛰️', name: 'Satellite' },
    { unicode: '🚂', name: 'Locomotive' },
    { unicode: '🚃', name: 'Railway Car' },
    { unicode: '🚄', name: 'High-Speed Train' },
    { unicode: '🚅', name: 'Bullet Train' },
    { unicode: '🚆', name: 'Train' },
    { unicode: '🚇', name: 'Metro' },
    { unicode: '🚈', name: 'Light Rail' },
    { unicode: '🚉', name: 'Station' },
    { unicode: '🚊', name: 'Tram' },
    { unicode: '🚝', name: 'Monorail' },
    { unicode: '🚞', name: 'Mountain Railway' },
    { unicode: '🚋', name: 'Tram Car' },
    { unicode: '🚌', name: 'Bus' },
    { unicode: '🚍', name: 'Oncoming Bus' },
    { unicode: '🚎', name: 'Trolleybus' },
    { unicode: '🚐', name: 'Minibus' },
    { unicode: '🚑', name: 'Ambulance' },
    { unicode: '🚒', name: 'Fire Engine' },
    { unicode: '🚓', name: 'Police Car' },
    { unicode: '🚔', name: 'Oncoming Police Car' },
    { unicode: '🚕', name: 'Taxi' },
    { unicode: '🚖', name: 'Oncoming Taxi' },
    { unicode: '🚗', name: 'Automobile' },
    { unicode: '🚘', name: 'Oncoming Automobile' },
    { unicode: '🚙', name: 'Sport Utility Vehicle' },
    { unicode: '🛻', name: 'Pickup Truck' },
    { unicode: '🚚', name: 'Delivery Truck' },
    { unicode: '🚛', name: 'Articulated Lorry' },
    { unicode: '🚜', name: 'Tractor' },
    { unicode: '🏎️', name: 'Racing Car' },
    { unicode: '🏍️', name: 'Motorcycle' },
    { unicode: '🛵', name: 'Motor Scooter' },
    { unicode: '🦽', name: 'Manual Wheelchair' },
    { unicode: '🦼', name: 'Motorized Wheelchair' },
    { unicode: '🛺', name: 'Auto Rickshaw' },
    { unicode: '🚲', name: 'Bicycle' },
    { unicode: '🛴', name: 'Kick Scooter' },
    { unicode: '🛹', name: 'Skateboard' },
    { unicode: '🚏', name: 'Bus Stop' },
    { unicode: '🛣️', name: 'Motorway' },
    { unicode: '🛤️', name: 'Railway Track' },
    { unicode: '🛢️', name: 'Oil Drum' },
    { unicode: '⛽', name: 'Fuel Pump' },
    { unicode: '🚨', name: 'Police Car Light' },
    { unicode: '🚥', name: 'Horizontal Traffic Light' },
    { unicode: '🚦', name: 'Vertical Traffic Light' },
    { unicode: '🛑', name: 'Stop Sign' },
    { unicode: '🚧', name: 'Construction' },
    { unicode: '⚓', name: 'Anchor' },
    { unicode: '⛵', name: 'Sailboat' },
    { unicode: '🛶', name: 'Canoe' },
    { unicode: '🚤', name: 'Speedboat' },
    { unicode: '🛳️', name: 'Passenger Ship' },
    { unicode: '⛴️', name: 'Ferry' },
    { unicode: '🛥️', name: 'Motor Boat' },
    { unicode: '🚢', name: 'Ship' },
    { unicode: '✈️', name: 'Airplane' },

    // Destinations & Landmarks
    { unicode: '🌍', name: 'Globe Showing Europe-Africa' },
    { unicode: '🌎', name: 'Globe Showing Americas' },
    { unicode: '🌏', name: 'Globe Showing Asia-Australia' },
    { unicode: '🌐', name: 'Globe with Meridians' },
    { unicode: '🗺️', name: 'World Map' },
    { unicode: '🗾', name: 'Map of Japan' },
    { unicode: '🧭', name: 'Compass' },
    { unicode: '🏔️', name: 'Snow-Capped Mountain' },
    { unicode: '⛰️', name: 'Mountain' },
    { unicode: '🌋', name: 'Volcano' },
    { unicode: '🗻', name: 'Mount Fuji' },
    { unicode: '🏕️', name: 'Camping' },
    { unicode: '🏖️', name: 'Beach with Umbrella' },
    { unicode: '🏜️', name: 'Desert' },
    { unicode: '🏝️', name: 'Desert Island' },
    { unicode: '🏞️', name: 'National Park' },
    { unicode: '🏟️', name: 'Stadium' },
    { unicode: '🏛️', name: 'Classical Building' },
    { unicode: '🏗️', name: 'Building Construction' },
    { unicode: '🧱', name: 'Brick' },
    { unicode: '🏘️', name: 'Houses' },
    { unicode: '🏚️', name: 'Derelict House' },
    { unicode: '🏠', name: 'House' },
    { unicode: '🏡', name: 'House with Garden' },
    { unicode: '🏢', name: 'Office Building' },
    { unicode: '🏣', name: 'Japanese Post Office' },
    { unicode: '🏤', name: 'Post Office' },
    { unicode: '🏥', name: 'Hospital' },
    { unicode: '🏦', name: 'Bank' },
    { unicode: '🏨', name: 'Hotel' },
    { unicode: '🏩', name: 'Love Hotel' },
    { unicode: '🏪', name: 'Convenience Store' },
    { unicode: '🏫', name: 'School' },
    { unicode: '🏬', name: 'Department Store' },
    { unicode: '🏭', name: 'Factory' },
    { unicode: '🏯', name: 'Japanese Castle' },
    { unicode: '🏰', name: 'Castle' },
    { unicode: '💒', name: 'Wedding' },
    { unicode: '🗼', name: 'Tokyo Tower' },
    { unicode: '🗽', name: 'Statue of Liberty' },
    { unicode: '⛪', name: 'Church' },
    { unicode: '🕌', name: 'Mosque' },
    { unicode: '🛕', name: 'Hindu Temple' },
    { unicode: '🕍', name: 'Synagogue' },
    { unicode: '⛩️', name: 'Shinto Shrine' },
    { unicode: '🕋', name: 'Kaaba' },
    { unicode: '⛲', name: 'Fountain' },
    { unicode: '⛺', name: 'Tent' },
    { unicode: '🌁', name: 'Foggy' },
    { unicode: '🌃', name: 'Night with Stars' },
    { unicode: '🏙️', name: 'Cityscape' },
    { unicode: '🌄', name: 'Sunrise Over Mountains' },
    { unicode: '🌅', name: 'Sunrise' },
    { unicode: '🌆', name: 'Cityscape at Dusk' },
    { unicode: '🌇', name: 'Sunset' },
    { unicode: '🌉', name: 'Bridge at Night' },
    { unicode: '♨️', name: 'Hot Springs' },
    { unicode: '🎠', name: 'Carousel Horse' },
    { unicode: '🎡', name: 'Ferris Wheel' },
    { unicode: '🎢', name: 'Roller Coaster' },
    { unicode: '💈', name: 'Barber Pole' },
    { unicode: '🎪', name: 'Circus Tent' },

    // Travel Activities
    { unicode: '🚶', name: 'Person Walking' },
    { unicode: '🚶‍♂️', name: 'Man Walking' },
    { unicode: '🚶‍♀️', name: 'Woman Walking' },
    { unicode: '🧍', name: 'Person Standing' },
    { unicode: '🧎', name: 'Person Kneeling' },
    { unicode: '🏃', name: 'Person Running' },
    { unicode: '🏃‍♂️', name: 'Man Running' },
    { unicode: '🏃‍♀️', name: 'Woman Running' },
    { unicode: '🧗', name: 'Person Climbing' },
    { unicode: '🧗‍♂️', name: 'Man Climbing' },
    { unicode: '🧗‍♀️', name: 'Woman Climbing' },
    { unicode: '🚣', name: 'Person Rowing Boat' },
    { unicode: '🚣‍♂️', name: 'Man Rowing Boat' },
    { unicode: '🚣‍♀️', name: 'Woman Rowing Boat' },
    { unicode: '🏊', name: 'Person Swimming' },
    { unicode: '🏊‍♂️', name: 'Man Swimming' },
    { unicode: '🏊‍♀️', name: 'Woman Swimming' },
    { unicode: '🚴', name: 'Person Biking' },
    { unicode: '🚴‍♂️', name: 'Man Biking' },
    { unicode: '🚴‍♀️', name: 'Woman Biking' },
    { unicode: '🚵', name: 'Person Mountain Biking' },
    { unicode: '🚵‍♂️', name: 'Man Mountain Biking' },
    { unicode: '🚵‍♀️', name: 'Woman Mountain Biking' },
    { unicode: '🤸', name: 'Person Cartwheeling' },
    { unicode: '🤸‍♂️', name: 'Man Cartwheeling' },
    { unicode: '🤸‍♀️', name: 'Woman Cartwheeling' },
    { unicode: '🤽', name: 'Person Playing Water Polo' },
    { unicode: '🤽‍♂️', name: 'Man Playing Water Polo' },
    { unicode: '🤽‍♀️', name: 'Woman Playing Water Polo' },
    { unicode: '🤾', name: 'Person Playing Handball' },
    { unicode: '🤾‍♂️', name: 'Man Playing Handball' },
    { unicode: '🤾‍♀️', name: 'Woman Playing Handball' },
    { unicode: '🤹', name: 'Person Juggling' },
    { unicode: '🤹‍♂️', name: 'Man Juggling' },
    { unicode: '🤹‍♀️', name: 'Woman Juggling' },
    { unicode: '🧘', name: 'Person in Lotus Position' },
    { unicode: '🧘‍♂️', name: 'Man in Lotus Position' },
    { unicode: '🧘‍♀️', name: 'Woman in Lotus Position' },
    { unicode: '🛀', name: 'Person Taking Bath' },
    { unicode: '🛌', name: 'Person in Bed' },

    // Travel Items
    { unicode: '🧳', name: 'Luggage' },
    { unicode: '🛍️', name: 'Shopping Bags' },
    { unicode: '🎁', name: 'Wrapped Gift' },
    { unicode: '🔮', name: 'Crystal Ball' },
    { unicode: '📿', name: 'Prayer Beads' },
    { unicode: '💎', name: 'Gem Stone' },
    { unicode: '👓', name: 'Glasses' },
    { unicode: '🕶️', name: 'Sunglasses' },
    { unicode: '🥽', name: 'Goggles' },
    { unicode: '🥼', name: 'Lab Coat' },
    { unicode: '🦺', name: 'Safety Vest' },
    { unicode: '👔', name: 'Necktie' },
    { unicode: '👕', name: 'T Shirt' },
    { unicode: '👖', name: 'Jeans' },
    { unicode: '🧣', name: 'Scarf' },
    { unicode: '🧤', name: 'Gloves' },
    { unicode: '🧥', name: 'Coat' },
    { unicode: '🧦', name: 'Socks' },
    { unicode: '👗', name: 'Dress' },
    { unicode: '👘', name: 'Kimono' },
    { unicode: '🥻', name: 'Sari' },
    { unicode: '🩱', name: 'One-Piece Swimsuit' },
    { unicode: '🩲', name: 'Briefs' },
    { unicode: '🩳', name: 'Shorts' },
    { unicode: '👙', name: 'Bikini' },
    { unicode: '👚', name: 'Womans Clothes' },
    { unicode: '👛', name: 'Purse' },
    { unicode: '👜', name: 'Handbag' },
    { unicode: '👝', name: 'Clutch Bag' },
    { unicode: '🛍️', name: 'Shopping Bags' },
    { unicode: '🎒', name: 'Backpack' },
    { unicode: '👞', name: 'Mans Shoe' },
    { unicode: '👟', name: 'Running Shoe' },
    { unicode: '🥾', name: 'Hiking Boot' },
    { unicode: '🥿', name: 'Flat Shoe' },
    { unicode: '👠', name: 'High Heeled Shoe' },
    { unicode: '👡', name: 'Womans Sandal' },
    { unicode: '🩰', name: 'Ballet Shoes' },
    { unicode: '👢', name: 'Womans Boots' },
    { unicode: '👑', name: 'Crown' },
    { unicode: '👒', name: 'Womans Hat' },
    { unicode: '🎩', name: 'Top Hat' },
    { unicode: '🎓', name: 'Graduation Cap' },
    { unicode: '🧢', name: 'Billed Cap' },
    { unicode: '⛑️', name: 'Rescue Workers Helmet' },
    { unicode: '📿', name: 'Prayer Beads' },
    { unicode: '💄', name: 'Lipstick' },
    { unicode: '💍', name: 'Ring' },
    { unicode: '💼', name: 'Briefcase' }

            // Add more travel here
        ],
        objects: [
            { unicode: '💡', name: 'Light Bulb' },
            { unicode: '📱', name: 'Mobile Phone' },
            { unicode: '⌚', name: 'Watch' },
                { "unicode": "💼", "name": "Briefcase" },
    { "unicode": "📦", "name": "Package" },
    { "unicode": "🖥️", "name": "Desktop Computer" },
    { "unicode": "💻", "name": "Laptop" },
    { "unicode": "🖨️", "name": "Printer" },
    { "unicode": "🖱️", "name": "Computer Mouse" },
    { "unicode": "🖲️", "name": "Trackball" },
    { "unicode": "📷", "name": "Camera" },
    { "unicode": "📸", "name": "Camera with Flash" },
    { "unicode": "📹", "name": "Video Camera" },
    { "unicode": "🎥", "name": "Movie Camera" },
    { "unicode": "📺", "name": "Television" },
    { "unicode": "📻", "name": "Radio" },
    { "unicode": "🎙️", "name": "Studio Microphone" },
    { "unicode": "🎚️", "name": "Level Slider" },
    { "unicode": "🎛️", "name": "Control Knobs" },
    { "unicode": "🔋", "name": "Battery" },
    { "unicode": "🔌", "name": "Electric Plug" },
    { "unicode": "💡", "name": "Light Bulb" },
    { "unicode": "🔦", "name": "Flashlight" },
    { "unicode": "🕯️", "name": "Candle" },
    { "unicode": "🧯", "name": "Fire Extinguisher" },
    { "unicode": "🛢️", "name": "Oil Drum" },
    { "unicode": "🛠️", "name": "Hammer and Wrench" },
    { "unicode": "🧰", "name": "Toolbox" },
    { "unicode": "🧲", "name": "Magnet" },
    { "unicode": "🔧", "name": "Wrench" },
    { "unicode": "🔨", "name": "Hammer" },
    { "unicode": "🪓", "name": "Axe" },
    { "unicode": "🪛", "name": "Screwdriver" },
    { "unicode": "🔩", "name": "Nut and Bolt" },
    { "unicode": "🗜️", "name": "Clamp" },
    { "unicode": "🔒", "name": "Locked" },
    { "unicode": "🔓", "name": "Unlocked" },
    { "unicode": "🔏", "name": "Locked with Pen" },
    { "unicode": "🔐", "name": "Locked with Key" },
    { "unicode": "🔑", "name": "Key" },
    { "unicode": "🗝️", "name": "Old Key" },
    { "unicode": "💰", "name": "Money Bag" },
    { "unicode": "💳", "name": "Credit Card" },
    { "unicode": "🧾", "name": "Receipt" },
    { "unicode": "📄", "name": "Page Facing Up" },
    { "unicode": "📃", "name": "Page with Curl" },
    { "unicode": "📑", "name": "Bookmark Tabs" },
    { "unicode": "📅", "name": "Calendar" },
    { "unicode": "📆", "name": "Tear-Off Calendar" },
    { "unicode": "🗓️", "name": "Spiral Calendar" },
    { "unicode": "🗒️", "name": "Spiral Notepad" },
    { "unicode": "📇", "name": "Card Index" },
    { "unicode": "📁", "name": "File Folder" },
    { "unicode": "📂", "name": "Open File Folder" },
    { "unicode": "🗃️", "name": "Card File Box" },
    { "unicode": "🗄️", "name": "File Cabinet" },
    { "unicode": "🗑️", "name": "Wastebasket" },
    { "unicode": "🧺", "name": "Basket" },
    { "unicode": "🧻", "name": "Roll of Paper" },
    { "unicode": "🪣", "name": "Bucket" },
    { "unicode": "🧼", "name": "Soap" },
    { "unicode": "🧽", "name": "Sponge" },
    { "unicode": "🧴", "name": "Lotion Bottle" },
    { "unicode": "🛁", "name": "Bathtub" },
    { "unicode": "🚽", "name": "Toilet" },
    { "unicode": "🚿", "name": "Shower" },
    { "unicode": "🛏️", "name": "Bed" },
    { "unicode": "🛋️", "name": "Couch and Lamp" },
    { "unicode": "🪑", "name": "Chair" },
    { "unicode": "🚪", "name": "Door" },
    { "unicode": "🪞", "name": "Mirror" },
    { "unicode": "🪟", "name": "Window" },
    { "unicode": "🧸", "name": "Teddy Bear" },
    { "unicode": "🪆", "name": "Nesting Dolls" },
    { "unicode": "🧷", "name": "Safety Pin" },
    { "unicode": "🧹", "name": "Broom" },
    { "unicode": "🧦", "name": "Socks" },
    { "unicode": "🪡", "name": "Sewing Needle" },
    { "unicode": "🧵", "name": "Thread" },
    { "unicode": "🪢", "name": "Knot" },
    { "unicode": "📿", "name": "Prayer Beads" },
    { "unicode": "💈", "name": "Barber Pole" },
    { "unicode": "🔮", "name": "Crystal Ball" },
    { "unicode": "🧿", "name": "Nazar Amulet" },
    { "unicode": "🕳️", "name": "Hole" },
    { "unicode": "🪧", "name": "Placard" },
    { "unicode": "🔖", "name": "Bookmark" },
    { "unicode": "🏷️", "name": "Label" },
    { "unicode": "🧭", "name": "Compass" },
    { "unicode": "🕰️", "name": "Mantelpiece Clock" },
    { "unicode": "⏰", "name": "Alarm Clock" },
    { "unicode": "⏱️", "name": "Stopwatch" },
    { "unicode": "⏲️", "name": "Timer Clock" },
    { "unicode": "🕛", "name": "Twelve O’Clock" },
            
            
            // Add more objects here
        ],
        symbols: [
            { "unicode": "❤️", "name": "Red Heart" },
    { "unicode": "🧡", "name": "Orange Heart" },
    { "unicode": "💛", "name": "Yellow Heart" },
    { "unicode": "💚", "name": "Green Heart" },
    { "unicode": "💙", "name": "Blue Heart" },
    { "unicode": "💜", "name": "Purple Heart" },
    { "unicode": "🖤", "name": "Black Heart" },
    { "unicode": "🤍", "name": "White Heart" },
    { "unicode": "🤎", "name": "Brown Heart" },
    { "unicode": "💔", "name": "Broken Heart" },
    { "unicode": "❣️", "name": "Heart Exclamation" },
    { "unicode": "💕", "name": "Two Hearts" },
    { "unicode": "💞", "name": "Revolving Hearts" },
    { "unicode": "💓", "name": "Beating Heart" },
    { "unicode": "💗", "name": "Growing Heart" },
    { "unicode": "💖", "name": "Sparkling Heart" },
    { "unicode": "💘", "name": "Heart with Arrow" },
    { "unicode": "💝", "name": "Heart with Ribbon" },
    { "unicode": "💟", "name": "Heart Decoration" },
    { "unicode": "☮️", "name": "Peace Symbol" },
    { "unicode": "✝️", "name": "Latin Cross" },
    { "unicode": "☪️", "name": "Star and Crescent" },
    { "unicode": "🕉️", "name": "Om" },
    { "unicode": "☸️", "name": "Wheel of Dharma" },
    { "unicode": "✡️", "name": "Star of David" },
    { "unicode": "🔯", "name": "Dotted Six-Pointed Star" },
    { "unicode": "🕎", "name": "Menorah" },
    { "unicode": "☯️", "name": "Yin Yang" },
    { "unicode": "☦️", "name": "Orthodox Cross" },
    { "unicode": "🛐", "name": "Place of Worship" },
    { "unicode": "⛎", "name": "Ophiuchus" },
    { "unicode": "♈", "name": "Aries" },
    { "unicode": "♉", "name": "Taurus" },
    { "unicode": "♊", "name": "Gemini" },
    { "unicode": "♋", "name": "Cancer" },
    { "unicode": "♌", "name": "Leo" },
    { "unicode": "♍", "name": "Virgo" },
    { "unicode": "♎", "name": "Libra" },
    { "unicode": "♏", "name": "Scorpio" },
    { "unicode": "♐", "name": "Sagittarius" },
    { "unicode": "♑", "name": "Capricorn" },
    { "unicode": "♒", "name": "Aquarius" },
    { "unicode": "♓", "name": "Pisces" },
    { "unicode": "🔀", "name": "Shuffle Tracks Button" },
    { "unicode": "🔁", "name": "Repeat Button" },
    { "unicode": "🔂", "name": "Repeat Single Button" },
    { "unicode": "▶️", "name": "Play Button" },
    { "unicode": "⏩", "name": "Fast-Forward Button" },
    { "unicode": "⏭️", "name": "Next Track Button" },
    { "unicode": "⏯️", "name": "Play or Pause Button" },
    { "unicode": "⏪", "name": "Fast Reverse Button" },
    { "unicode": "⏮️", "name": "Last Track Button" },
    { "unicode": "🔼", "name": "Upwards Button" },
    { "unicode": "🔽", "name": "Downwards Button" },
    { "unicode": "⏫", "name": "Fast Up Button" },
    { "unicode": "⏬", "name": "Fast Down Button" },
    { "unicode": "◀️", "name": "Reverse Button" },
    { "unicode": "🔄", "name": "Counterclockwise Arrows Button" },
    { "unicode": "🔃", "name": "Clockwise Arrows Button" },
    { "unicode": "🔚", "name": "End Arrow" },
    { "unicode": "🔙", "name": "Back Arrow" },
    { "unicode": "🔛", "name": "On! Arrow" },
    { "unicode": "🔝", "name": "Top Arrow" },
    { "unicode": "🔜", "name": "Soon Arrow" },
    { "unicode": "✔️", "name": "Check Mark" },
    { "unicode": "☑️", "name": "Checkbox with Check" },
    { "unicode": "✅", "name": "Check Mark Button" },
    { "unicode": "❌", "name": "Cross Mark" },
    { "unicode": "❎", "name": "Cross Mark Button" },
    { "unicode": "➕", "name": "Plus Sign" },
    { "unicode": "➖", "name": "Minus Sign" },
    { "unicode": "➗", "name": "Divide Sign" },
    { "unicode": "✖️", "name": "Multiplication Sign" },
    { "unicode": "💲", "name": "Heavy Dollar Sign" },
    { "unicode": "💱", "name": "Currency Exchange" },
    { "unicode": "™️", "name": "Trade Mark" },
    { "unicode": "©️", "name": "Copyright" },
    { "unicode": "®️", "name": "Registered" },
    { "unicode": "🔞", "name": "Eighteen Plus" },
    { "unicode": "🚫", "name": "Prohibited" },
    { "unicode": "⛔", "name": "No Entry" },
    { "unicode": "🛑", "name": "Stop Sign" },
    { "unicode": "⚠️", "name": "Warning" },
    { "unicode": "☢️", "name": "Radioactive" },
    { "unicode": "☣️", "name": "Biohazard" },
    { "unicode": "♻️", "name": "Recycling Symbol" },
    { "unicode": "🚮", "name": "Litter in Bin Sign" },
    { "unicode": "🚯", "name": "No Littering" },
    { "unicode": "🚱", "name": "Non-Potable Water" },
    { "unicode": "🚳", "name": "No Bicycles" },
    { "unicode": "🚭", "name": "No Smoking" },
    { "unicode": "🚷", "name": "No Pedestrians" },
    { "unicode": "🔰", "name": "Japanese Symbol for Beginner" },
    { "unicode": "🔯", "name": "Six Pointed Star with Dot" },
    { unicode: '🔥', name: 'Fire' }
            // Add more symbols here
        ],
        flags: [
            { unicode: '🇦🇼', name: 'Aruba Flag' },
    { unicode: '🇦🇫', name: 'Afghanistan Flag' },
    { unicode: '🇦🇴', name: 'Angola Flag' },
    { unicode: '🇦🇮', name: 'Anguilla Flag' },
    { unicode: '🇦🇽', name: 'Åland Islands Flag' },
    { unicode: '🇦🇱', name: 'Albania Flag' },
    { unicode: '🇦🇩', name: 'Andorra Flag' },
    { unicode: '🇦🇪', name: 'United Arab Emirates Flag' },
    { unicode: '🇦🇷', name: 'Argentina Flag' },
    { unicode: '🇦🇲', name: 'Armenia Flag' },
    { unicode: '🇦🇸', name: 'American Samoa Flag' },
    { unicode: '🇦🇶', name: 'Antarctica Flag' },
    { unicode: '🇹🇫', name: 'French Southern Territories Flag' },
    { unicode: '🇦🇬', name: 'Antigua and Barbuda Flag' },
    { unicode: '🇦🇺', name: 'Australia Flag' },
    { unicode: '🇦🇹', name: 'Austria Flag' },
    { unicode: '🇦🇿', name: 'Azerbaijan Flag' },
    { unicode: '🇧🇮', name: 'Burundi Flag' },
    { unicode: '🇧🇪', name: 'Belgium Flag' },
    { unicode: '🇧🇯', name: 'Benin Flag' },
    { unicode: '🇧🇶', name: 'Bonaire, Sint Eustatius and Saba Flag' },
    { unicode: '🇧🇫', name: 'Burkina Faso Flag' },
    { unicode: '🇧🇩', name: 'Bangladesh Flag' },
    { unicode: '🇧🇬', name: 'Bulgaria Flag' },
    { unicode: '🇧🇭', name: 'Bahrain Flag' },
    { unicode: '🇧🇸', name: 'Bahamas Flag' },
    { unicode: '🇧🇦', name: 'Bosnia and Herzegovina Flag' },
    { unicode: '🇧🇱', name: 'Saint Barthélemy Flag' },
    { unicode: '🇧🇾', name: 'Belarus Flag' },
    { unicode: '🇧🇿', name: 'Belize Flag' },
    { unicode: '🇧🇲', name: 'Bermuda Flag' },
    { unicode: '🇧🇴', name: 'Bolivia, Plurinational State of Flag' },
    { unicode: '🇧🇷', name: 'Brazil Flag' },
    { unicode: '🇧🇧', name: 'Barbados Flag' },
    { unicode: '🇧🇳', name: 'Brunei Darussalam Flag' },
    { unicode: '🇧🇹', name: 'Bhutan Flag' },
    { unicode: '🇧🇻', name: 'Bouvet Island Flag' },
    { unicode: '🇧🇼', name: 'Botswana Flag' },
    { unicode: '🇨🇫', name: 'Central African Republic Flag' },
    { unicode: '🇨🇦', name: 'Canada Flag' },
    { unicode: '🇨🇨', name: 'Cocos (Keeling) Islands Flag' },
    { unicode: '🇨🇭', name: 'Switzerland Flag' },
    { unicode: '🇨🇱', name: 'Chile Flag' },
    { unicode: '🇨🇳', name: 'China Flag' },
    { unicode: '🇨🇮', name: 'Côte d Ivoire Flag' },
    { unicode: '🇨🇲', name: 'Cameroon Flag' },
    { unicode: '🇨🇩', name: 'Congo, The Democratic Republic of the Flag' },
    { unicode: '🇨🇬', name: 'Congo Flag' },
    { unicode: '🇨🇰', name: 'Cook Islands Flag' },
    { unicode: '🇨🇴', name: 'Colombia Flag' },
    { unicode: '🇰🇲', name: 'Comoros Flag' },
    { unicode: '🇨🇻', name: 'Cabo Verde Flag' },
    { unicode: '🇨🇷', name: 'Costa Rica Flag' },
    { unicode: '🇨🇺', name: 'Cuba Flag' },
    { unicode: '🇨🇼', name: 'Curaçao Flag' },
    { unicode: '🇨🇽', name: 'Christmas Island Flag' },
    { unicode: '🇰🇾', name: 'Cayman Islands Flag' },
    { unicode: '🇨🇾', name: 'Cyprus Flag' },
    { unicode: '🇨🇿', name: 'Czechia Flag' },
    { unicode: '🇩🇪', name: 'Germany Flag' },
    { unicode: '🇩🇯', name: 'Djibouti Flag' },
    { unicode: '🇩🇲', name: 'Dominica Flag' },
    { unicode: '🇩🇰', name: 'Denmark Flag' },
    { unicode: '🇩🇴', name: 'Dominican Republic Flag' },
    { unicode: '🇩🇿', name: 'Algeria Flag' },
    { unicode: '🇪🇨', name: 'Ecuador Flag' },
    { unicode: '🇪🇬', name: 'Egypt Flag' },
    { unicode: '🇪🇷', name: 'Eritrea Flag' },
    { unicode: '🇪🇭', name: 'Western Sahara Flag' },
    { unicode: '🇪🇸', name: 'Spain Flag' },
    { unicode: '🇪🇪', name: 'Estonia Flag' },
    { unicode: '🇪🇹', name: 'Ethiopia Flag' },
    { unicode: '🇫🇮', name: 'Finland Flag' },
    { unicode: '🇫🇯', name: 'Fiji Flag' },
    { unicode: '🇫🇰', name: 'Falkland Islands (Malvinas) Flag' },
    { unicode: '🇫🇷', name: 'France Flag' },
    { unicode: '🇫🇴', name: 'Faroe Islands Flag' },
    { unicode: '🇫🇲', name: 'Micronesia, Federated States of Flag' },
    { unicode: '🇬🇦', name: 'Gabon Flag' },
    { unicode: '🇬🇧', name: 'United Kingdom Flag' },
    { unicode: '🇬🇪', name: 'Georgia Flag' },
    { unicode: '🇬🇬', name: 'Guernsey Flag' },
    { unicode: '🇬🇭', name: 'Ghana Flag' },
    { unicode: '🇬🇮', name: 'Gibraltar Flag' },
    { unicode: '🇬🇳', name: 'Guinea Flag' },
    { unicode: '🇬🇵', name: 'Guadeloupe Flag' },
    { unicode: '🇬🇲', name: 'Gambia Flag' },
    { unicode: '🇬🇼', name: 'Guinea-Bissau Flag' },
    { unicode: '🇬🇶', name: 'Equatorial Guinea Flag' },
    { unicode: '🇬🇷', name: 'Greece Flag' },
    { unicode: '🇬🇩', name: 'Grenada Flag' },
    { unicode: '🇬🇱', name: 'Greenland Flag' },
    { unicode: '🇬🇹', name: 'Guatemala Flag' },
    { unicode: '🇬🇫', name: 'French Guiana Flag' },
    { unicode: '🇬🇺', name: 'Guam Flag' },
    { unicode: '🇬🇾', name: 'Guyana Flag' },
    { unicode: '🇭🇰', name: 'Hong Kong Flag' },
    { unicode: '🇭🇲', name: 'Heard Island and McDonald Islands Flag' },
    { unicode: '🇭🇳', name: 'Honduras Flag' },
    { unicode: '🇭🇷', name: 'Croatia Flag' },
    { unicode: '🇭🇹', name: 'Haiti Flag' },
    { unicode: '🇭🇺', name: 'Hungary Flag' },
    { unicode: '🇮🇩', name: 'Indonesia Flag' },
    { unicode: '🇮🇲', name: 'Isle of Man Flag' },
    { unicode: '🇮🇳', name: 'India Flag' },
    { unicode: '🇮🇴', name: 'British Indian Ocean Territory Flag' },
    { unicode: '🇮🇪', name: 'Ireland Flag' },
    { unicode: '🇮🇷', name: 'Iran, Islamic Republic of Flag' },
    { unicode: '🇮🇶', name: 'Iraq Flag' },
    { unicode: '🇮🇸', name: 'Iceland Flag' },
    { unicode: '🇮🇱', name: 'Israel Flag' },
    { unicode: '🇮🇹', name: 'Italy Flag' },
    { unicode: '🇯🇲', name: 'Jamaica Flag' },
    { unicode: '🇯🇪', name: 'Jersey Flag' },
    { unicode: '🇯🇴', name: 'Jordan Flag' },
    { unicode: '🇯🇵', name: 'Japan Flag' },
    { unicode: '🇰🇿', name: 'Kazakhstan Flag' },
    { unicode: '🇰🇪', name: 'Kenya Flag' },
    { unicode: '🇰🇬', name: 'Kyrgyzstan Flag' },
    { unicode: '🇰🇭', name: 'Cambodia Flag' },
    { unicode: '🇰🇮', name: 'Kiribati Flag' },
    { unicode: '🇰🇳', name: 'Saint Kitts and Nevis Flag' },
    { unicode: '🇰🇷', name: 'Korea, Republic of Flag' },
    { unicode: '🇰🇼', name: 'Kuwait Flag' },
    { unicode: '🇱🇦', name: 'Lao People s Democratic Republic Flag' },
    { unicode: '🇱🇧', name: 'Lebanon Flag' },
    { unicode: '🇱🇷', name: 'Liberia Flag' },
    { unicode: '🇱🇾', name: 'Libya Flag' },
    { unicode: '🇱🇨', name: 'Saint Lucia Flag' },
    { unicode: '🇱🇮', name: 'Liechtenstein Flag' },
    { unicode: '🇱🇰', name: 'Sri Lanka Flag' },
    { unicode: '🇱🇸', name: 'Lesotho Flag' },
    { unicode: '🇱🇹', name: 'Lithuania Flag' },
    { unicode: '🇱🇺', name: 'Luxembourg Flag' },
    { unicode: '🇱🇻', name: 'Latvia Flag' },
    { unicode: '🇲🇴', name: 'Macao Flag' },
    { unicode: '🇲🇫', name: 'Saint Martin (French part) Flag' },
    { unicode: '🇲🇦', name: 'Morocco Flag' },
    { unicode: '🇲🇨', name: 'Monaco Flag' },
    { unicode: '🇲🇩', name: 'Moldova, Republic of Flag' },
    { unicode: '🇲🇬', name: 'Madagascar Flag' },
    { unicode: '🇲🇻', name: 'Maldives Flag' },
    { unicode: '🇲🇽', name: 'Mexico Flag' },
    { unicode: '🇲🇭', name: 'Marshall Islands Flag' },
    { unicode: '🇲🇰', name: 'North Macedonia Flag' },
    { unicode: '🇲🇱', name: 'Mali Flag' },
    { unicode: '🇲🇹', name: 'Malta Flag' },
    { unicode: '🇲🇲', name: 'Myanmar Flag' },
    { unicode: '🇲🇪', name: 'Montenegro Flag' },
    { unicode: '🇲🇳', name: 'Mongolia Flag' },
    { unicode: '🇲🇵', name: 'Northern Mariana Islands Flag' },
    { unicode: '🇲🇿', name: 'Mozambique Flag' },
    { unicode: '🇲🇷', name: 'Mauritania Flag' },
    { unicode: '🇲🇸', name: 'Montserrat Flag' },
    { unicode: '🇲🇶', name: 'Martinique Flag' },
    { unicode: '🇲🇺', name: 'Mauritius Flag' },
    { unicode: '🇲🇼', name: 'Malawi Flag' },
    { unicode: '🇲🇾', name: 'Malaysia Flag' },
    { unicode: '🇾🇹', name: 'Mayotte Flag' },
    { unicode: '🇳🇦', name: 'Namibia Flag' },
    { unicode: '🇳🇨', name: 'New Caledonia Flag' },
    { unicode: '🇳🇪', name: 'Niger Flag' },
    { unicode: '🇳🇫', name: 'Norfolk Island Flag' },
    { unicode: '🇳🇬', name: 'Nigeria Flag' },
    { unicode: '🇳🇮', name: 'Nicaragua Flag' },
    { unicode: '🇳🇺', name: 'Niue Flag' },
    { unicode: '🇳🇱', name: 'Netherlands Flag' },
    { unicode: '🇳🇴', name: 'Norway Flag' },
    { unicode: '🇳🇵', name: 'Nepal Flag' },
    { unicode: '🇳🇷', name: 'Nauru Flag' },
    { unicode: '🇳🇿', name: 'New Zealand Flag' },
    { unicode: '🇴🇲', name: 'Oman Flag' },
    { unicode: '🇵🇰', name: 'Pakistan Flag' },
    { unicode: '🇵🇦', name: 'Panama Flag' },
    { unicode: '🇵🇳', name: 'Pitcairn Flag' },
    { unicode: '🇵🇪', name: 'Peru Flag' },
    { unicode: '🇵🇭', name: 'Philippines Flag' },
    { unicode: '🇵🇼', name: 'Palau Flag' },
    { unicode: '🇵🇬', name: 'Papua New Guinea Flag' },
    { unicode: '🇵🇱', name: 'Poland Flag' },
    { unicode: '🇵🇷', name: 'Puerto Rico Flag' },
    { unicode: '🇰🇵', name: 'Korea, Democratic People s Republic of Flag'},
    { unicode: '🇵🇹', name: 'Portugal Flag' },
    { unicode: '🇵🇾', name: 'Paraguay Flag' },
    { unicode: '🇵🇸', name: 'Palestine, State of Flag' },
    { unicode: '🇵🇫', name: 'French Polynesia Flag' },
    { unicode: '🇶🇦', name: 'Qatar Flag' },
    { unicode: '🇷🇪', name: 'Réunion Flag' },
    { unicode: '🇷🇴', name: 'Romania Flag' },
    { unicode: '🇷🇺', name: 'Russian Federation Flag' },
    { unicode: '🇷🇼', name: 'Rwanda Flag' },
    { unicode: '🇸🇦', name: 'Saudi Arabia Flag' },
    { unicode: '🇸🇩', name: 'Sudan Flag' },
    { unicode: '🇸🇳', name: 'Senegal Flag' },
    { unicode: '🇸🇬', name: 'Singapore Flag' },
    { unicode: '🇬🇸', name: 'South Georgia and the South Sandwich Islands Flag' },
    { unicode: '🇸🇭', name: 'Saint Helena, Ascension and Tristan da Cunha Flag' },
    { unicode: '🇸🇯', name: 'Svalbard and Jan Mayen Flag' },
    { unicode: '🇸🇧', name: 'Solomon Islands Flag' },
    { unicode: '🇸🇱', name: 'Sierra Leone Flag' },
    { unicode: '🇸🇻', name: 'El Salvador Flag' },
    { unicode: '🇸🇲', name: 'San Marino Flag' },
    { unicode: '🇸🇴', name: 'Somalia Flag' },
    { unicode: '🇵🇲', name: 'Saint Pierre and Miquelon Flag' },
    { unicode: '🇷🇸', name: 'Serbia Flag' },
    { unicode: '🇸🇸', name: 'South Sudan Flag' },
    { unicode: '🇸🇹', name: 'Sao Tome and Principe Flag' },
    { unicode: '🇸🇷', name: 'Suriname Flag' },
    { unicode: '🇸🇰', name: 'Slovakia Flag' },
    { unicode: '🇸🇮', name: 'Slovenia Flag' },
    { unicode: '🇸🇪', name: 'Sweden Flag' },
    { unicode: '🇸🇿', name: 'Eswatini Flag' },
    { unicode: '🇸🇽', name: 'Sint Maarten (Dutch part) Flag' },
    { unicode: '🇸🇨', name: 'Seychelles Flag' },
    { unicode: '🇸🇾', name: 'Syrian Arab Republic Flag' },
    { unicode: '🇹🇨', name: 'Turks and Caicos Islands Flag' },
    { unicode: '🇹🇩', name: 'Chad Flag' },
    { unicode: '🇹🇬', name: 'Togo Flag' },
    { unicode: '🇹🇭', name: 'Thailand Flag' },
    { unicode: '🇹🇯', name: 'Tajikistan Flag' },
    { unicode: '🇹🇰', name: 'Tokelau Flag' },
    { unicode: '🇹🇲', name: 'Turkmenistan Flag' },
    { unicode: '🇹🇱', name: 'Timor-Leste Flag' },
    { unicode: '🇹🇴', name: 'Tonga Flag' },
    { unicode: '🇹🇹', name: 'Trinidad and Tobago Flag' },
    { unicode: '🇹🇳', name: 'Tunisia Flag' },
    { unicode: '🇹🇷', name: 'Turkey Flag' },
    { unicode: '🇹🇻', name: 'Tuvalu Flag' },
    { unicode: '🇹🇼', name: 'Taiwan, Province of China Flag' },
    { unicode: '🇹🇿', name: 'Tanzania, United Republic of Flag' },
    { unicode: '🇺🇬', name: 'Uganda Flag' },
    { unicode: '🇺🇦', name: 'Ukraine Flag' },
    { unicode: '🇺🇲', name: 'United States Minor Outlying Islands Flag' },
    { unicode: '🇺🇾', name: 'Uruguay Flag' },
    { unicode: '🇺🇸', name: 'United States Flag' },
    { unicode: '🇺🇿', name: 'Uzbekistan Flag' },
    { unicode: '🇻🇦', name: 'Holy See (Vatican City State) Flag' },
    { unicode: '🇻🇨', name: 'Saint Vincent and the Grenadines Flag' },
    { unicode: '🇻🇪', name: 'Venezuela, Bolivarian Republic of Flag' },
    { unicode: '🇻🇬', name: 'Virgin Islands, British Flag' },
    { unicode: '🇻🇮', name: 'Virgin Islands, U.S. Flag' },
    { unicode: '🇻🇳', name: 'Viet Nam Flag' },
    { unicode: '🇻🇺', name: 'Vanuatu Flag' },
    { unicode: '🇼🇫', name: 'Wallis and Futuna Flag' },
    { unicode: '🇼🇸', name: 'Samoa Flag' },
    { unicode: '🇾🇪', name: 'Yemen Flag' },
    { unicode: '🇿🇦', name: 'South Africa Flag' },
    { unicode: '🇿🇲', name: 'Zambia Flag' },
    { unicode: '🇿🇼', name: 'Zimbabwe Flag' },
        ],
        combinations: 
[
    { "combo": "👨‍💻💻🚀", "name": "Developer Working", "desc": "Man programmer working on computer with rocket speed" },
    { "combo": "👩‍🍳🍳🍲", "name": "Woman Cooking", "desc": "Woman chef cooking a meal in the kitchen" },
    { "combo": "👨‍🚀🚀🌕", "name": "Astronaut to Moon", "desc": "Astronaut traveling in rocket to the moon" },
    { "combo": "👩‍🎨🎨🖌️", "name": "Creative Artist", "desc": "Woman artist painting with colors and brush" },
    { "combo": "👨‍🏫📚🧠", "name": "Knowledge Mentor", "desc": "Male teacher sharing knowledge with books" },
    { "combo": "👩‍⚕️🩺💊", "name": "Doctor on Duty", "desc": "Female doctor diagnosing with stethoscope and medicine" },
    { "combo": "👨‍🎓🎓📖", "name": "Graduation Day", "desc": "Student graduating and reading book" },
    { "combo": "🧑‍🔧🔧🛠️", "name": "Mechanic at Work", "desc": "Engineer or mechanic fixing with wrench and tools" },
    { "combo": "👨‍🎤🎤🎶", "name": "Stage Performer", "desc": "Singer performing on stage with microphone and music" },
    { "combo": "👩‍🏫📘📈", "name": "Data Educator", "desc": "Teacher presenting stats and growth from a book" },
    { "combo": "👨‍⚖️⚖️📜", "name": "Law and Justice", "desc": "Judge delivering legal decisions with balance and scroll" },
    { "combo": "👨‍🔬🧪🔬", "name": "Science Researcher", "desc": "Scientist experimenting with test tubes and microscope" },
    { "combo": "👩‍✈️✈️🌍", "name": "Pilot on Duty", "desc": "Female pilot flying the plane across the globe" },
    { "combo": "🧑‍💼💼📞", "name": "Office Professional", "desc": "Person handling work, briefcase and business calls" },
    { "combo": "🧘‍♂️🕉️🧘‍♀️", "name": "Meditation Time", "desc": "Man and woman practicing yoga and inner peace" },
    { "combo": "👨‍🔧🚗🔩", "name": "Car Mechanic", "desc": "Man repairing a vehicle with parts and tools" },
    { "combo": "👩‍🎓📚🎓", "name": "Academic Success", "desc": "Woman graduating with books and diploma" },
    { "combo": "🧑‍🍳🥘🍽️", "name": "Home Chef", "desc": "Cook preparing and serving a delicious meal" },
    { "combo": "👨‍💼📈💰", "name": "Business Analyst", "desc": "Man presenting data for financial growth" },
    { "combo": "🧑‍🎤🎧🎼", "name": "Music Producer", "desc": "Artist mixing sounds in a studio" },
    { "combo": "👩‍⚖️📚⚖️", "name": "Female Judge", "desc": "Woman serving law and reading legal material" },
    { "combo": "🧑‍🏭⚙️🏗️", "name": "Factory Worker", "desc": "Worker operating machines in a plant" },
    { "combo": "👨‍🌾🌽🚜", "name": "Modern Farmer", "desc": "Man harvesting crops with a tractor" },
    { "combo": "👩‍💻📊🖱️", "name": "Remote Worker", "desc": "Woman working from computer on data and analysis" },
    { "combo": "🧑‍✈️🛫🗺️", "name": "Explorer Pilot", "desc": "Pilot flying across new lands with maps" },
    { "combo": "👨‍🚒🚒🔥", "name": "Firefighter Duty", "desc": "Man controlling fires and rescuing lives" },
    { "combo": "👩‍🚀🛰️🪐", "name": "Space Explorer", "desc": "Woman exploring planets using satellite" },
    { "combo": "👨‍🎨🖼️🎨", "name": "Gallery Artist", "desc": "Man showcasing his artwork" },
    { "combo": "🧑‍🎓📝📖", "name": "Student Life", "desc": "Person writing and studying hard" },
    { "combo": "👩‍🔧🔨🪛", "name": "Fix It Lady", "desc": "Woman repairing with tools" },
    { "combo": "👨‍⚕️💉🩺", "name": "Health Check", "desc": "Male doctor giving an injection" },
    { "combo": "🧑‍💻💾🖥️", "name": "IT Technician", "desc": "Person fixing or managing systems" },
    { "combo": "👩‍🔬🧬🧫", "name": "Lab Specialist", "desc": "Scientist testing genes and samples" },
    { "combo": "🧑‍🚒⛑️🚨", "name": "Emergency Hero", "desc": "Rescue person saving lives in crisis" },
    { "combo": "👨‍✈️🛬🧳", "name": "Travel Pilot", "desc": "Male pilot flying passengers and luggage" },
    { "combo": "👩‍🎤🎹🎺", "name": "Stage Diva", "desc": "Female singer performing with music instruments" },
    { "combo": "🧑‍🏫🧠📝", "name": "Smart Educator", "desc": "Teacher enlightening with mind and notes" },
    { "combo": "👨‍🌾🌾🌦️", "name": "Rainy Farming", "desc": "Farmer growing crops in weather" },
    { "combo": "👩‍🏭🔧🚧", "name": "Construction Worker", "desc": "Woman building with tools and barriers" },
    { "combo": "🧑‍⚕️🩹🏥", "name": "Hospital Care", "desc": "Medical worker treating patients" },
    { "combo": "👨‍💻⌨️🖱️", "name": "Tech Support", "desc": "Programmer fixing digital systems" },
    { "combo": "👩‍🎓🎒📝", "name": "Student Ready", "desc": "Female student heading to class" },
    { "combo": "🧑‍🔬🔍📡", "name": "Science Investigator", "desc": "Scientist analyzing signals and data" },
    { "combo": "👨‍✈️📦✈️", "name": "Cargo Pilot", "desc": "Transporting packages by air" },
    { "combo": "👩‍🔧🧰📟", "name": "Technician Woman", "desc": "Lady fixing tech issues" },
    { "combo": "🧑‍🎤🎷🎧", "name": "Jazz Artist", "desc": "Performer playing music and beats" },
    { "combo": "👨‍🏫🗒️📚", "name": "Classroom Coach", "desc": "Male teacher mentoring students" },
    { "combo": "👩‍🌾🌱🌻", "name": "Nature Farmer", "desc": "Woman growing plants and flowers" },
            // Add more combinations here
        ],
        trending: [
            
  { "unicode": "😂", "name": "Face with Tears of Joy" },
  { "unicode": "❤️", "name": "Red Heart" },
  { "unicode": "🤣", "name": "Rolling on the Floor Laughing" },
  { "unicode": "😍", "name": "Smiling Face with Heart-Eyes" },
  { "unicode": "🙏", "name": "Folded Hands" },
  { "unicode": "🔥", "name": "Fire" },
  { "unicode": "😊", "name": "Smiling Face with Smiling Eyes" },
  { "unicode": "👍", "name": "Thumbs Up" },
  { "unicode": "👎", "name": "Thumbs Down" },
  { "unicode": "⬅️", "name": "Left Arrow" },
  { "unicode": "➡️", "name": "Right Arrow" },
  { "unicode": "😭", "name": "Loudly Crying Face" },
  { "unicode": "😘", "name": "Face Blowing a Kiss" },
  { "unicode": "🥰", "name": "Smiling Face with Hearts" },
  { "unicode": "😎", "name": "Smiling Face with Sunglasses" },
  { "unicode": "💀", "name": "Skull" },
  { "unicode": "😁", "name": "Beaming Face with Smiling Eyes" },
  { "unicode": "😉", "name": "Winking Face" },
  { "unicode": "😢", "name": "Crying Face" },
  { "unicode": "😅", "name": "Smiling Face with Sweat" },
  { "unicode": "👏", "name": "Clapping Hands" },
  { "unicode": "💯", "name": "Hundred Points" },
  { "unicode": "🤔", "name": "Thinking Face" },
  { "unicode": "🤗", "name": "Hugging Face" },
  { "unicode": "🎉", "name": "Party Popper" },
  { "unicode": "🥳", "name": "Partying Face" },
  { "unicode": "😡", "name": "Pouting Face" },
  { "unicode": "😮‍💨", "name": "Face Exhaling" },
  { "unicode": "🤯", "name": "Exploding Head" },
  { "unicode": "😋", "name": "Face Savoring Food" },
  { "unicode": "😤", "name": "Face with Steam From Nose" },
  { "unicode": "🤩", "name": "Star-Struck" },
  { "unicode": "🤫", "name": "Shushing Face" },
  { "unicode": "😴", "name": "Sleeping Face" },
  { "unicode": "😜", "name": "Winking Face with Tongue" },
  { "unicode": "🤪", "name": "Zany Face" },
  { "unicode": "👀", "name": "Eyes" },
  { "unicode": "🌟", "name": "Glowing Star" },
  { "unicode": "✨", "name": "Sparkles" },
  { "unicode": "🌈", "name": "Rainbow" },
  { "unicode": "☀️", "name": "Sun" },
  { "unicode": "🌙", "name": "Crescent Moon" },
  { "unicode": "💫", "name": "Dizzy" },
  { "unicode": "🙌", "name": "Raising Hands" },
  { "unicode": "🤝", "name": "Handshake" },
  { "unicode": "💪", "name": "Flexed Biceps" },
  { "unicode": "👑", "name": "Crown" },
  { "unicode": "🎶", "name": "Musical Notes" }


            // Add more trending here
        ]
    },
    
    // Initialize the application
    init: function() {
        this.initializeDOMElements();
        this.setupEventListeners();
        this.initializeEmojiDatabase();
        this.showAllEmojis();
    },
    
    // Initialize DOM elements
    initializeDOMElements: function() {
        this.elements.emojiPicker = document.getElementById('emoji-picker');
        this.elements.searchInput = document.getElementById('emoji-search');
        this.elements.categoryButtons = document.querySelectorAll('.category-btn');
        this.elements.copyNotification = document.getElementById('copyNotification');
        this.elements.skinToneOptions = document.querySelectorAll('.skin-tone');
        this.elements.tabButtons = document.querySelectorAll('.tab-btn');
        this.elements.emojiLoader = document.getElementById('emoji-loader');
        this.elements.searchBtn = document.getElementById('searchBtn');
        this.elements.scrollTopBtn = document.getElementById('scrollTopBtn');
        this.elements.mobileMenuBtn = document.getElementById('mobileMenuBtn');
        this.elements.mobileMenu = document.getElementById('mobileMenu');
    },
    
    // Initialize emoji database
    initializeEmojiDatabase: function() {
        // Combine all emojis into the 'all' category
        this.emojiDatabase.all = [
            ...this.emojiDatabase.smileys,
            ...this.emojiDatabase.people,
            ...this.emojiDatabase.animals,
            ...this.emojiDatabase.food,
            ...this.emojiDatabase.travel,
            ...this.emojiDatabase.objects,
            ...this.emojiDatabase.symbols,
            ...this.emojiDatabase.flags
        ];
        
        // Set trending emojis
        this.state.trendingEmojis = this.emojiDatabase.trending;
    },
    
    // Setup all event listeners
    setupEventListeners: function() {
        // Search functionality
        if (this.elements.searchInput) {
            this.elements.searchInput.addEventListener('input', () => this.searchEmojis());
        }
        
        if (this.elements.searchBtn) {
            this.elements.searchBtn.addEventListener('click', () => this.searchEmojis());
        }
        
        // Category buttons
        this.elements.categoryButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const category = button.getAttribute('data-category');
                this.setCategory(category);
            });
        });
        
        // Skin tone options
        this.elements.skinToneOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const tone = option.getAttribute('data-tone');
                this.setSkinTone(tone);
            });
        });
        
        // Tab buttons
        this.elements.tabButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const tabName = button.textContent.trim();
                this.setActiveTab(tabName);
            });
        });
        
        // Form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            });
        }
        
        // Scroll to top button
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                this.elements.scrollTopBtn.classList.add('visible');
            } else {
                this.elements.scrollTopBtn.classList.remove('visible');
            }
        });
        
        if (this.elements.scrollTopBtn) {
            this.elements.scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
        
        // Mobile menu toggle
        if (this.elements.mobileMenuBtn && this.elements.mobileMenu) {
            this.elements.mobileMenuBtn.addEventListener('click', () => {
                this.elements.mobileMenu.classList.toggle('active');
            });
            
            // Close mobile menu when clicking on a link
            this.elements.mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    this.elements.mobileMenu.classList.remove('active');
                });
            });
        }
    },
    
    // Copy to clipboard
    copyToClipboard: function(text) {
        navigator.clipboard.writeText(text).then(() => {
            this.showNotification();
        }).catch(err => {
            console.error('Failed to copy: ', err);
            // Fallback for browsers that don't support navigator.clipboard
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                this.showNotification();
            } catch (err) {
                console.error('Fallback copy failed: ', err);
            }
            document.body.removeChild(textarea);
        });
    },
    
    // Show notification
    showNotification: function() {
        if (this.elements.copyNotification) {
            this.elements.copyNotification.style.display = 'block';
            setTimeout(() => {
                this.elements.copyNotification.style.display = 'none';
            }, 2000);
        }
    },
    
    // Category filter
    setCategory: function(category) {
        this.state.currentCategory = category;
        this.elements.categoryButtons.forEach(btn => btn.classList.remove('active'));
        const targetBtn = document.querySelector(`.category-btn[data-category="${category}"]`);
        if (targetBtn) {
            targetBtn.classList.add('active');
        }
        
        // Show emojis for the selected category
        if (this.state.currentTab === 'All Emojis') {
            this.showEmojisByCategory(category);
        }
    },
    
    // Skin tone selection
    setSkinTone: function(tone) {
        this.state.currentSkinTone = tone;
        this.elements.skinToneOptions.forEach(option => option.classList.remove('active'));
        const targetOption = document.querySelector(`.skin-tone.${tone}`);
        if (targetOption) {
            targetOption.classList.add('active');
        }
    },
    
    // Set active tab
    setActiveTab: function(tabName) {
        this.state.currentTab = tabName;
        this.elements.tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // Find the correct tab button by text content
        this.elements.tabButtons.forEach(btn => {
            if (btn.textContent.trim() === tabName) {
                btn.classList.add('active');
            }
        });
        
        if (tabName === 'Favorites') {
            this.showFavorites();
        } else if (tabName === 'Combinations') {
            this.showCombinations();
        } else if (tabName === 'Recently Used') {
            this.showRecentlyUsed();
        } else if (tabName === 'Top Trending') {
            this.showTrending();
        } else {
            this.showAllEmojis();
        }
    },
    
    // Show all emojis (default view)
    showAllEmojis: function() {
        this.showEmojisByCategory(this.state.currentCategory);
    },
    
    // Show emojis by category
    showEmojisByCategory: function(category) {
        const container = document.querySelector('.emoji-grid-container');
        let emojis = [];
        
        if (category === 'all') {
            emojis = this.emojiDatabase.all;
        } else {
            emojis = this.emojiDatabase[category] || [];
        }
        
        if (emojis.length === 0) {
            container.innerHTML = '<div class="empty-state"><p>No emojis found in this category.</p></div>';
            return;
        }
        
        let html = '<div class="emoji-grid">';
        emojis.forEach(emoji => {
            const isFavorite = this.isFavorite(emoji);
            html += `
                <div class="emoji-item" data-emoji='${JSON.stringify(emoji).replace(/'/g, "\\'")}'>
                    <span class="emoji-char">${emoji.unicode}</span>
                    <span class="emoji-name">${emoji.name}</span>
                    <button class="emoji-favorite ${isFavorite ? 'active' : ''}">♥</button>
                </div>
            `;
        });
        html += '</div>';
        container.innerHTML = html;
        
        // Add event listeners to the newly created emoji items
        this.setupEmojiItemEventListeners();
    },
    
    // Setup event listeners for emoji items
    setupEmojiItemEventListeners: function() {
        const emojiItems = document.querySelectorAll('.emoji-item');
        emojiItems.forEach(item => {
            // Click on emoji to copy
            item.addEventListener('click', (e) => {
                // Don't trigger if clicking on the favorite button
                if (e.target.classList.contains('emoji-favorite')) return;
                
                const emojiData = JSON.parse(item.getAttribute('data-emoji'));
                this.copyToClipboard(emojiData.unicode);
                this.addToRecentlyUsed(emojiData);
            });
            
            // Favorite button
            const favoriteBtn = item.querySelector('.emoji-favorite');
            if (favoriteBtn) {
                favoriteBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const emojiData = JSON.parse(item.getAttribute('data-emoji'));
                    this.toggleFavorite(emojiData);
                    
                    // Update the button appearance
                    favoriteBtn.classList.toggle('active');
                });
            }
        });
    },
    
    // Check if emoji is favorite
    isFavorite: function(emoji) {
        return this.state.favorites.some(f => {
            if (f.unicode && emoji.unicode) return f.unicode === emoji.unicode;
            if (f.combo && emoji.combo) return f.combo === emoji.combo;
            return false;
        });
    },
    
    // Show favorites
    showFavorites: function() {
        const container = document.querySelector('.emoji-grid-container');
        if (this.state.favorites.length === 0) {
            container.innerHTML = '<div class="empty-state"><p>No favorite emojis yet. Click the heart icon on any emoji to add it to favorites!</p></div>';
            return;
        }
        
        let html = '<div class="emoji-grid">';
        this.state.favorites.forEach(emoji => {
            const isFavorite = true; // They're all favorites in this view
            if (emoji.combo) {
                // Combination item
                html += `
                    <div class="emoji-item combination-item" data-emoji='${JSON.stringify(emoji).replace(/'/g, "\\'")}'>
                        <span class="emoji-char">${emoji.combo}</span>
                        <span class="emoji-name">${emoji.name}</span>
                        ${emoji.desc ? `<span class="emoji-desc">${emoji.desc}</span>` : ''}
                        <button class="emoji-favorite active">♥</button>
                    </div>
                `;
            } else {
                // Regular emoji item
                html += `
                    <div class="emoji-item" data-emoji='${JSON.stringify(emoji).replace(/'/g, "\\'")}'>
                        <span class="emoji-char">${emoji.unicode}</span>
                        <span class="emoji-name">${emoji.name}</span>
                        <button class="emoji-favorite active">♥</button>
                    </div>
                `;
            }
        });
        html += '</div>';
        container.innerHTML = html;
        
        // Add event listeners to the newly created emoji items
        this.setupEmojiItemEventListeners();
    },
    
    // Show recently used
    showRecentlyUsed: function() {
        const container = document.querySelector('.emoji-grid-container');
        if (this.state.recentlyUsed.length === 0) {
            container.innerHTML = '<div class="empty-state"><p>No recently used emojis yet. Start using emojis and they will appear here!</p></div>';
            return;
        }
        
        let html = '<div class="emoji-grid">';
        this.state.recentlyUsed.forEach(emoji => {
            const isFavorite = this.isFavorite(emoji);
            if (emoji.combo) {
                // Combination item
                html += `
                    <div class="emoji-item combination-item" data-emoji='${JSON.stringify(emoji).replace(/'/g, "\\'")}'>
                        <span class="emoji-char">${emoji.combo}</span>
                        <span class="emoji-name">${emoji.name}</span>
                        <span class="emoji-desc">${emoji.desc}</span>
                        <button class="emoji-favorite ${isFavorite ? 'active' : ''}">♥</button>
                    </div>
                `;
            } else {
                // Regular emoji item
                html += `
                    <div class="emoji-item" data-emoji='${JSON.stringify(emoji).replace(/'/g, "\\'")}'>
                        <span class="emoji-char">${emoji.unicode}</span>
                        <span class="emoji-name">${emoji.name}</span>
                        <button class="emoji-favorite ${isFavorite ? 'active' : ''}">♥</button>
                    </div>
                `;
            }
        });
        html += '</div>';
        container.innerHTML = html;
        
        // Add event listeners to the newly created emoji items
        this.setupEmojiItemEventListeners();
    },
    
    // Show trending emojis
    showTrending: function() {
        const container = document.querySelector('.emoji-grid-container');
        
        let html = '<div class="emoji-grid">';
        this.state.trendingEmojis.forEach(emoji => {
            const isFavorite = this.isFavorite(emoji);
            html += `
                <div class="emoji-item" data-emoji='${JSON.stringify(emoji).replace(/'/g, "\\'")}'>
                    <span class="emoji-char">${emoji.unicode}</span>
                    <span class="emoji-name">${emoji.name}</span>
                    <button class="emoji-favorite ${isFavorite ? 'active' : ''}">♥</button>
                </div>
            `;
        });
        html += '</div>';
        container.innerHTML = html;
        
        // Add event listeners to the newly created emoji items
        this.setupEmojiItemEventListeners();
    },
    
    // Show emoji combinations
    showCombinations: function() {
        const container = document.querySelector('.emoji-grid-container');
        
        let html = '<div class="emoji-grid">';
        this.emojiDatabase.combinations.forEach(item => {
            const isFavorite = this.isFavorite(item);
            html += `
                <div class="emoji-item combination-item" data-emoji='${JSON.stringify(item).replace(/'/g, "\\'")}'>
                    <span class="emoji-char">${item.combo}</span>
                    <span class="emoji-name">${item.name}</span>
                    <span class="emoji-desc">${item.desc}</span>
                    <button class="emoji-favorite ${isFavorite ? 'active' : ''}">♥</button>
                </div>
            `;
        });
        html += '</div>';
        container.innerHTML = html;
        
        // Add event listeners to the newly created emoji items
        this.setupEmojiItemEventListeners();
    },
    
    // Add to recently used
    addToRecentlyUsed: function(emojiData) {
        // Remove if already exists
        this.state.recentlyUsed = this.state.recentlyUsed.filter(e => {
            if (e.unicode && emojiData.unicode) return e.unicode !== emojiData.unicode;
            if (e.combo && emojiData.combo) return e.combo !== emojiData.combo;
            return true;
        });
        
        // Add to beginning
        this.state.recentlyUsed.unshift(emojiData);
        
        // Keep only last 15
        this.state.recentlyUsed = this.state.recentlyUsed.slice(0, 10);
        localStorage.setItem('emojiRecentlyUsed', JSON.stringify(this.state.recentlyUsed));
    },
    
    // Toggle favorite
    toggleFavorite: function(emoji) {
        const index = this.state.favorites.findIndex(e => {
            if (e.unicode && emoji.unicode) return e.unicode === emoji.unicode;
            if (e.combo && emoji.combo) return e.combo === emoji.combo;
            return false;
        });
        
        if (index > -1) {
            this.state.favorites.splice(index, 1);
        } else {
            this.state.favorites.push(emoji);
        }
        
        localStorage.setItem('emojiFavorites', JSON.stringify(this.state.favorites));
    },
    
    // Search emojis
    searchEmojis: function() {
        const searchTerm = this.elements.searchInput.value.trim().toLowerCase();
        const container = document.querySelector('.emoji-grid-container');
        
        if (!searchTerm) {
            // If search is empty, show the current tab content
            this.setActiveTab(this.state.currentTab);
            return;
        }
        
        // Search in the appropriate dataset based on current tab
        let itemsToSearch = [];
        
        if (this.state.currentTab === 'Favorites') {
            itemsToSearch = this.state.favorites;
        } else if (this.state.currentTab === 'Combinations') {
            itemsToSearch = this.emojiDatabase.combinations;
        } else if (this.state.currentTab === 'Recently Used') {
            itemsToSearch = this.state.recentlyUsed;
        } else if (this.state.currentTab === 'Top Trending') {
            itemsToSearch = this.state.trendingEmojis;
        } else {
            // For "All Emojis" or any category
            if (this.state.currentCategory === 'all') {
                itemsToSearch = this.emojiDatabase.all;
            } else {
                itemsToSearch = this.emojiDatabase[this.state.currentCategory] || [];
            }
        }
        
        // Filter items based on search term
        const filteredItems = itemsToSearch.filter(item => {
            const name = item.name ? item.name.toLowerCase() : '';
            const desc = item.desc ? item.desc.toLowerCase() : '';
            return name.includes(searchTerm) || desc.includes(searchTerm);
        });
        
        if (filteredItems.length === 0) {
            container.innerHTML = '<div class="empty-state"><p>No emojis found matching your search.</p></div>';
            return;
        }
        
        // Display search results
        let html = '<div class="emoji-grid">';
        filteredItems.forEach(item => {
            const isFavorite = this.isFavorite(item);
            
            if (item.combo) {
                // Combination item
                html += `
                    <div class="emoji-item combination-item" data-emoji='${JSON.stringify(item).replace(/'/g, "\\'")}'>
                        <span class="emoji-char">${item.combo}</span>
                        <span class="emoji-name">${item.name}</span>
                        <span class="emoji-desc">${item.desc}</span>
                        <button class="emoji-favorite ${isFavorite ? 'active' : ''}">♥</button>
                    </div>
                `;
            } else {
                // Regular emoji item
                html += `
                    <div class="emoji-item" data-emoji='${JSON.stringify(item).replace(/'/g, "\\'")}'>
                        <span class="emoji-char">${item.unicode}</span>
                        <span class="emoji-name">${item.name}</span>
                        <button class="emoji-favorite ${isFavorite ? 'active' : ''}">♥</button>
                    </div>
                `;
            }
        });
        html += '</div>';
        container.innerHTML = html;
        
        // Add event listeners to the newly created emoji items
        this.setupEmojiItemEventListeners();
    }
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    EmojiMaster.init();
});