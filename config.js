// Configuration des informations personnelles

const profileConfig = {
    // Informations de base


    name: "Mohamed Cosmetic",
    bio: "تعامل بحترام كل زبائن بيع بصدق والمصدقية",
    profileImage: "https://scontent.falg7-6.fna.fbcdn.net/v/t39.30808-1/543384978_3967319893480749_2372044722443050960_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=1d2534&_nc_ohc=JE4iDeoN8QwQ7kNvwGXu9RT&_nc_oc=AdmVzOJEDpILCJE1mlWWUWLH5OhptCltaVGTE2kbqlODdvkyq3_8egVUqCwyh-PNcWc&_nc_zt=24&_nc_ht=scontent.falg7-6.fna&_nc_gid=4LfDcNgrQ62i1MrKJfeoEg&oh=00_AfmDEFYq1X62WdgdMgUqtNKJLj8IMTlM2a_NZlGDIRSg8Q&oe=69597297",
    





    // Réseaux sociaux
    socialLinks: {
        facebook: "https://www.facebook.com/share/1CETifinbV/",
        facebook: "https://www.facebook.com/share/1BV2bfCb1u/",
        instagram: "https://www.instagram.com/mohamed_cosmitic?utm_source=qr&igsh=cW5kbXQ5ZXlwNGJi",
        tiktok: "https://www.tiktok.com/@mohamedcosmetic92?_r=1&_t=ZS-92cuCHjNtY4",
        whatsapp: "+213770201979",
        telegram: "+213 562 33 14 08",
        linkedin: "daisyparkhouse",
        snapchat: "https://www.snapchat.com/@sheikh_tidiane?sender_web_id=792b2a4d-05d3-4e8f-a5e0-1aeb89eba722&device_type=desktop&is_copy_url=true",
        email: "pubcom.alger@gmail.com",
        website: "https://www.youtube.com/",
        maps: "https://share.google/T1z7NAFbftnLYNKZy",
        phone: "+213770201979"
    },
    






    // Activation des icônes (mettre true pour afficher, false pour masquer)
    enabledIcons: {
        facebook: true,      // Afficher Facebook
        facebook: true,      // Afficher Facebook
        instagram: true,     // Afficher Instagram
        tiktok: true,        // Afficher TikTok
        whatsapp: true,      // Afficher WhatsApp
        telegram: false,      // Afficher Telegram
        linkedin: false,     // Afficher LinkedIn (mettre true pour l'activer)
        website: false,       // Afficher Site Web
        maps: false,          // Afficher Maps
        phone: true,         // Afficher Téléphone
        snapchat: false,      // Afficher Snapchat
        email: false,         // Afficher Email
    },
    
};



























// Ne pas modifier ci-dessous
if (typeof module !== 'undefined' && module.exports) {
    module.exports = profileConfig;
} else {
    window.profileConfig = profileConfig;
}

