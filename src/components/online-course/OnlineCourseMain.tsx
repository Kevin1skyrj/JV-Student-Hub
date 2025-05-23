import React from 'react';
import BannerSectionOne from './BannerSectionOne';
import CourseFeatureArea from './CourseFeatureArea';
import CourseCatagory from './CourseCatagory';
import OnlineCourseArea from './OnlineCourseArea';
import CoursePricingPlanArea from './CoursePricingPlanArea';
import TestimonialSliderOne from '../sliders/testimonial/TestimonialSliderOne';
import CoursePartnerArea from './CoursePartnerArea';
import CourseBlogArea from './CourseBlogArea';
import CourseCareerArea from './CourseCareerArea';
import CourseAboutArea from '../common/course-section/CourseAboutArea';
import CourseCounterArea from '../common/course-section/CourseCounterArea';
import OnlineCourseInstructor from './OnlineCourseInstructor';
import NewBatchesSection from '../Custom-Components/NewBatchSection';
import AboutJVSection from '../Custom-Components/AboutJV';
import AboutOwner from '../Custom-Components/AboutOwner';
import WhatWeOffer from '../Custom-Components/WhatWeOffer';

const OnlineCourseMain = () => {
    return (
        <>
            <BannerSectionOne />
            <NewBatchesSection />
            {/* <CourseFeatureArea /> */}
            <CourseCatagory />
            {/* <AboutJVSection /> */}
            {/* <CourseAboutArea /> */}
            <OnlineCourseArea />
            <WhatWeOffer />
            <AboutOwner />
            {/* <CoursePricingPlanArea /> */}
            <TestimonialSliderOne />
            {/* <OnlineCourseInstructor /> */}
            <CourseCounterArea />
            {/* <CoursePartnerArea /> */}
            {/* <CourseBlogArea /> */}
            {/* <CourseCareerArea /> */}
        </>
    );
};

export default OnlineCourseMain;