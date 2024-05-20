import { PostMetadata } from '@/components/model/PostMetadata';

export type PostThumbnailProps = Pick<
    PostMetadata,
    'date' | 'slug' | 'previewImage'
> &
    Partial<PostMetadata>;

// For this "one time use" landing page, manually add links per position
export const castlePosts: PostThumbnailProps[] = [
    {
        date: '2024-05-03',
        slug: 'twilio-contact-center-for-level20',
        previewImage: '/images/castleTwilio.jpg',
    },
];

export const bombBombPosts: PostThumbnailProps[] = [
    {
        date: '2023-07-10',
        slug: 'three-years-at-bombbomb',
        previewImage: '/images/bombbomb-logo.jpg',
    },
    {
        date: '2023-05-19',
        slug: 'my-new-favorite-mug',
        previewImage: '/images/new-favorite-mug.jpg',
    },
    {
        date: '2023-06-01',
        slug: 'remote-multiplayer-quiz-night-app',
        previewImage: '/images/quiz-thumb.jpg',
    },
    {
        date: '2020-06-01',
        slug: 'joined-bombbomb-team',
        previewImage: '/images/before-bombbomb-after.jpg',
    },
];

export const parsonsPosts: PostThumbnailProps[] = [
    {
        date: '2020-05-01',
        slug: 'web-developer-associate-principle-at-parsons',
        previewImage: '/images/fancy-ui.jpg',
    },
];

export const nutrienPosts: PostThumbnailProps[] = [
    {
        date: '2019-01-15',
        slug: 'nutrien-bulk-ecommerce-solution-for-farmers',
        previewImage: '/images/nutrien.jpg',
    },
];

export const spaceFoundationPosts: PostThumbnailProps[] = [
    {
        date: '2018-01-02',
        slug: 'europa-drone-controller',
        previewImage: '/images/europa-drone.jpg',
    },
    {
        date: '2017-12-01',
        slug: 'space-foundation-website',
        previewImage: '/images/space-foundation-2017.jpg',
    },
    {
        date: '2016-08-01',
        slug: 'the-space-report-online',
        previewImage: '/images/the-space-report.jpg',
    },
    {
        date: '2016-03-01',
        slug: 'cosmic-cruise-vr-mobile-app',
        previewImage: '/images/cosmic-cruise.jpg',
    },
    {
        date: '2015-05-27',
        slug: 'ibeacon-ranger',
        previewImage: '/images/ibeacon-ranger-feature.jpg',
    },
    {
        date: '2015-05-04',
        slug: 'event-info-screens-v2',
        previewImage: '/images/digital-signs-feature.jpg',
    },
    {
        date: '2014-12-15',
        slug: 'space-foundation-holiday-ecard-2014',
        previewImage: '/images/ecard-feature.jpg',
    },
    {
        date: '2014-10-01',
        slug: '31st-space-symposium-website',
        previewImage: '/images/31stSymposiumFeature.jpg',
    },
    {
        date: '2014-09-01',
        slug: '68th-iac-logo-for-event-proposal',
        previewImage: '/images/iac-feature3.jpg',
    },
    {
        date: '2014-07-01',
        slug: 'international-space-station-live',
        previewImage: '/images/iss-feature3.jpg',
    },
    {
        date: '2014-03-03',
        slug: 'discovery-center-theater-ad',
        previewImage: '/images/theater-ad-preview.jpg',
    },
    {
        date: '2013-10-11',
        slug: '30th-space-symposium',
        previewImage: '/images/30thSpaceSymposiumFeature.jpg',
    },
    {
        date: '2013-09-02',
        slug: 'teacher-liaison-application-process',
        previewImage: '/images/teacherLiaisonFeature.jpg',
    },
    {
        date: '2013-07-01',
        slug: 'data-driven-charts',
        previewImage: '/images/sfIndexFeature.jpg',
    },
    {
        date: '2013-05-06',
        slug: 'a-touch-of-mars-kiosk',
        previewImage: '/images/touchOfMarsKioskFeature.jpg',
    },
    {
        date: '2012-12-18',
        slug: 'science-on-the-sphere',
        previewImage: '/images/scienceOnSphereFeatured.jpg',
    },
    {
        date: '2012-12-17',
        slug: 'space-foundation-holiday-ecard-2012',
        previewImage: '/images/holidayFeature.jpg',
    },
    {
        date: '2012-10-31',
        slug: '29th-national-space-symposium',
        previewImage: '/images/29thNationalFeature.jpg',
    },
    {
        date: '2012-09-13',
        slug: 'fireworks-science-on-a-sphere-dataset',
        previewImage: '/images/fireworksFeature.jpg',
    },
    {
        date: '2012-09-03',
        slug: 'branded-science-on-a-sphere',
        previewImage: '/images/brandedSOSFeature.jpg',
    },
    {
        date: '2012-09-03',
        slug: 'pacific-space-leadership-forum',
        previewImage: '/images/pslfFeature.jpg',
    },
    {
        date: '2012-07-18',
        slug: 'space-and-science-fiction-halloween-ball',
        previewImage: '/images/halloweenBallFeature.jpg',
    },
    {
        date: '2012-05-03',
        slug: '28th-national-space-symposium',
        previewImage: '/images/28thNationalSpaceSymposiumFeature.jpg',
    },
    {
        date: '2012-02-17',
        slug: 'new-wwwspacefoundationorg',
        previewImage: '/images/spaceFoundationOrgLaunch.jpg',
    },
    {
        date: '2012-01-02',
        slug: 'space-foundation-info-screens',
        previewImage: '/images/infoScreensFeature.jpg',
    },
    {
        date: '2011-12-02',
        slug: 'donor-campaign-graphics',
        previewImage: '/images/donorPrintFeature.jpg',
    },
    {
        date: '2011-12-01',
        slug: 'custom-qr-code-generator',
        previewImage: '/images/qrFeature.jpg',
    },
    {
        date: '2011-12-01',
        slug: 'space-foundation-mothership',
        previewImage: '/images/spaceFoundationFeatured.jpg',
    },
    {
        date: '2011-10-31',
        slug: '27th-national-space-symposium',
        previewImage: '/images/27thSymposiumFeatured.jpg',
    },
    {
        date: '2011-10-30',
        slug: '27th-national-space-symposium-poster',
        previewImage: '/images/27thNssPosterFeature.jpg',
    },
    {
        date: '2011-09-01',
        slug: '28th-national-space-symposium',
        previewImage: '/images/28thFeature.jpg',
    },
    {
        date: '2011-07-08',
        slug: 'stylized-qr-codes-for-space-foundation',
        previewImage: '/images/qrBizCards.jpg',
    },
    {
        date: '2011-03-02',
        slug: 'why-invest-in-space',
        previewImage: '/images/certSTHOFPosters.jpg',
    },
    {
        date: '2011-02-01',
        slug: 'space-foundation-seat-master',
        previewImage: '/images/seatMasterFeature.jpg',
    },
    {
        date: '2011-02-01',
        slug: 'space-shuttle-challenge',
        previewImage: '/images/shuttleFeatured.jpg',
    },
    {
        date: '2011-01-02',
        slug: 'exploring-live-solar-imagery',
        previewImage: '/images/exploringSolar.jpg',
    },
    {
        date: '2011-01-01',
        slug: '/space-certification-program',
        previewImage: '/images/certificationFeatured.jpg',
    },
    {
        date: '2010-12-05',
        slug: 'a-visit-to-cheyenne-mountain-complex',
        previewImage: '/images/cheyeneMountain.jpg',
    },
    {
        date: '2010-06-16',
        slug: 'new-idea-gathering-website-launched-for-space-founation-team',
        previewImage: '/images/whatsMissing.jpg',
    },
    {
        date: '2010-05-18',
        slug: 'final-scheduled-launch-of-shuttle-atlantis',
        previewImage: '/images/atlantis.jpg',
    },
    {
        date: '2010-04-26',
        slug: 'successful-26th-national-space-symposium',
        previewImage: '/images/26thNationalSpaceSymposium.jpg',
    },
    {
        date: '2010-01-30',
        slug: 'national-space-symposium-new-website-design-and-drupal-power',
        previewImage: '/images/26thNationlSpaceSymposium2.jpg',
    },
    {
        date: '2009-11-02',
        slug: 'eat-well-and-prosper',
        previewImage: '/images/thanksgivingFeatured.jpg',
    },
    {
        date: '2009-09-27',
        slug: 'three-new-space-foundation-websites-powered-by-drupal',
        previewImage: '/images/globalspacesummit.jpg',
    },
    {
        date: '2009-08-29',
        slug: 'space-foundation-education-programs',
        previewImage: '/images/educationFeatured.jpg',
    },
    {
        date: '2009-08-27',
        slug: 'jack-swigert-aerospace-academy-grand-opening',
        previewImage: '/images/jsaaGrandOpening.jpg',
    },
    {
        date: '2009-08-15',
        slug: 'space-foundation-education-trip-to-pikes-peak',
        previewImage: '/images/pikesPeak.jpg',
    },
    {
        date: '2009-08-03',
        slug: 'jack-swigert-aerospace-academy-logo',
        previewImage: '/images/jsaaFeatured.jpg',
    },
    {
        date: '2009-07-01',
        slug: 'earth-and-moon-space-mural',
        previewImage: '/images/earthMoonFeature.jpg',
    },
    {
        date: '2009-07-01',
        slug: 'strategic-space-symposium',
        previewImage: '/images/stratFeature.jpg',
    },
    {
        date: '2009-06-30',
        slug: 'global-space-development-summit',
        previewImage: '/images/globalSpaceFeature.jpg',
    },
];

export const societyPosts: PostThumbnailProps[] = [
    {
        date: '2009-05-06',
        slug: 'big-thesocietycom-update-went-live-today',
        previewImage: '/images/jamesBond.jpg',
    },
    {
        date: '2009-04-02',
        slug: 'vacation-homes-for-charity',
        previewImage: '/images/vacation-homes-for-charity-feature.jpg',
    },
    {
        date: '2009-04-01',
        slug: 'the-society-of-leisure-enthusiasts',
        previewImage: '/images/societyFeatured.jpg',
    },
];

export const commotionPosts: PostThumbnailProps[] = [
    {
        date: '2007-10-22',
        slug: 'town-center-dentistry-and-orthodontics',
        previewImage: '/images/kesslerAfter.jpeg',
    },
    {
        date: '2007-10-15',
        slug: 'october-to-october-in-a-nutshell',
        previewImage: '/images/teamGroup.jpeg',
    },
    {
        date: '2007-03-03',
        slug: 'parking-stripe-advertising',
        previewImage: '/images/parkingStripe2.jpg',
    },
    {
        date: '2007-02-01',
        slug: 'bud-light-rock-paper-scissors',
        previewImage: '/images/budLightHandFeature.jpg',
    },
    {
        date: '2007-02-01',
        slug: 'the-dogfather',
        previewImage: '/images/dogFatherFeatured.jpg',
    },
    {
        date: '2006-10-04',
        slug: 'television-commercials-stop-amendment-42',
        previewImage: '/images/no42.jpg',
    },
    {
        date: '2006-08-28',
        slug: 'floss-floss-dance-and-toss-game',
        previewImage: '/images/flossFlossFeatured.jpg',
    },
    {
        date: '2006-07-28',
        slug: 'the-dental-diva',
        previewImage: '/images/dentalDivaFeatured.jpg',
    },
    {
        date: '2006-06-19',
        slug: 'scottish-stained-glass-website',
        previewImage: '/images/scottishStainedGlass.jpg',
    },
    {
        date: '2005-11-17',
        slug: 'parking-stripe-advertising-new-design',
        previewImage: '/images/parkingStripe.jpg',
    },
    {
        date: '2005-10-03',
        slug: 'race-for-the-cure-parking-stripe-advertising',
        previewImage: '/images/parkingStripeRace.jpg',
    },
];
