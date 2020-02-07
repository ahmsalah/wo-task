import React, { Fragment } from 'react';
import FeatureItem from './FeatureItem';
import styled from 'styled-components';
import theme from './styled/theme';
import { useSelector } from 'react-redux';

const data = {
	english: [
		{
			title: 'WEDDING WEBSITE',
			description:
				'Where you will save all your wedding memories forever, where you will choose your own personalized template, manage every event detail and let your guests share their pictures, videos and moments with you.',
			linkTitle: 'Create your website',
			link: 'https://weds360.com/en/build_your_website',
			imgSrc: 'tools-website.png'
		},
		{
			title: 'BUDGETER',
			description:
				'Do you have a figure in mind? Place it in the budgeter and we will provide you with all the choices and possibilities you can think of.',
			linkTitle: 'Create and manage your budget',
			link: 'https://weds360.com/en/budgeter',
			imgSrc: 'tools-budgeter.png'
		},
		{
			title: 'CHECK LIST',
			description:
				'Set your tasks, create your priority list and never forget any wedding detail.',
			linkTitle: 'Get your check list',
			link: 'https://weds360.com/en/checklists',
			imgSrc: 'tools-checklist.png'
		},
		{
			title: 'GUEST LIST',
			description:
				'Who is coming? Who is not? Who replied with a "Maybe"? Manage all of this while customizing your invitations. All in one place and right at your fingertips.',
			linkTitle: 'Create your guest list',
			link: 'https://weds360.com/en/guestlist',
			imgSrc: 'tools-guestlist.png'
		},
		{
			title: 'VENDORS',
			description:
				'Meet your service providers, view their profiles and make all the perfect choice for your wedding night.',
			linkTitle: 'Start your tour',
			link: 'https://weds360.com/en/services',
			imgSrc: 'tools-vendors.png'
		},
		{
			title: 'REGISTRY LIST',
			description:
				"Escape the awkward moments and receiving the same gift twice by listing everything you've thought of and every store you love. Let your guests choose what to get you for the wedding and say goodbye to unwanted presents.",
			linkTitle: 'Create your dream list',
			link: 'https://weds360.com/en/registry',
			imgSrc: 'tools-registry.png'
		}
	],
	arabic: [
		{
			title: 'موقع الفرح',
			description:
				'ده المكان اللي هتحتفظ فيه بكل الأوقات الحلوة وكل صور الفرح للأبد وتتحكم في كل التفاصيل. وهتقدر تختار تصميمه، وتخلي المعازيم يبعتولك عليه الصور والفيديوهات واللحظات المميزة في فرحك',
			linkTitle: 'اختار موقع الفرح',
			link: 'https://weds360.com/en/build_your_website',
			imgSrc: 'tools-website.png'
		},
		{
			title: 'تكاليف الفرح',
			description:
				'لو محدد الرقم اللي هتصرفه في الفرح، هنساعدك هنا تعرف تستغله صح وترتب التكاليف صح',
			linkTitle: 'اتحكم في فلوس فرحك',
			link: 'https://weds360.com/en/budgeter',
			imgSrc: 'tools-budgeter.png'
		},
		{
			title: 'جدول المهام',
			description:
				'حدد الحاجات اللي وراك، اعمل لنفسك جدول بالمهم منها وبأولوياتك في تنظيم الفرح علشان متنساش حاجة',
			linkTitle: 'ابدأ من هنا',
			link: 'https://weds360.com/en/checklists',
			imgSrc: 'tools-checklist.png'
		},
		{
			title: 'المعازيم',
			description:
				'مين اللي جاي الفرح؟ ومين اللي لازم تأكد عليه؟ ومين اعتذر؟ كلها حاجات هتقدر تنظمها، تتحكم فيها وتبعت دعوات فرح مخصصة لكل مجموعة',
			linkTitle: 'ابدأ من هنا',
			link: 'https://weds360.com/en/guestlist',
			imgSrc: 'tools-guestlist.png'
		},
		{
			title: 'متخصصين الفرح',
			description:
				'اعرف أكتر عن متخصصين الأفراح في كل المجالات وشوف شغلهم واختار الأفضل ليك ولفرحك',
			linkTitle: 'ابدأ من هنا',
			link: 'https://weds360.com/en/services',
			imgSrc: 'tools-vendors.png'
		},
		{
			title: 'هدايا الفرح',
			description:
				'جمع كل هدية نفسك فيها، كل محل بتحبه في مكان واحد، وساعد المعازيم يختاروا هدية الجواز من غير مواقف محرجة أو تكرار للهدايا',
			linkTitle: 'ابدأ من هنا',
			link: 'https://weds360.com/en/registry',
			imgSrc: 'tools-registry.png'
		}
	]
};

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
	grid-gap: 3rem;
	align-items: start;
	padding: 9rem;
	max-width: 107rem;
	margin: auto;
	align-items: center;
	@media ${theme.breakpoints.mobileL} {
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		padding: 6rem 2rem;
	}
`;

const WeddingPlanning = styled.h3`
	text-align: center;
	font-size: 24px;
	line-height: 1.25;
	text-align: center;
	color: #000000;
	text-transform: uppercase;
	font-weight: 900;
	padding: 4rem 7rem 0;
	margin: 0 auto;

	@media ${theme.breakpoints.laptop} {
		max-width: 90%;
	}

	@media ${theme.breakpoints.tablet} {
		padding: 4rem 2rem 0;
		font-size: 18px;
	}
`;

function Features() {
	const language = useSelector(state => state.language);

	return (
		<Fragment>
			<WeddingPlanning>
				Wedding Planning is a piece of cake with Weds360. We know what matters most and you
				can count on us every step of the way.
			</WeddingPlanning>

			<Container>
				{data[language].map(item => <FeatureItem key={item.title} {...item} />)}
			</Container>
		</Fragment>
	);
}

export default Features;
