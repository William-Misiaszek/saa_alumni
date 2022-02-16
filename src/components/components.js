import Accordion from './composite/accordion';
import AccordionItem from './composite/accordionItem';
import { SBAlert } from './storyblok/alert/alert';
import { SBAlertCtaLink } from './storyblok/alert/alertCtaLink';
import BasicCard from './cards/basicCard';
import BasicCardHorizontal from './cards/basicCardHorizontal';
import BasicPage from './page-types/basicPage';
import { SBCollectionCard } from './storyblok/cards/collectionCard';
import { SBCollectionCardHorizontal } from './storyblok/cards/collectionCardHorizontal';
import ComponentNotFound from './component_not_found';
import { SBCtaButton } from './storyblok/ctaButton';
import CtaCard from './cards/ctaCard';
import { SBCtaLink } from './storyblok/ctaLink';
import CtaGroup from './cta/ctaGroup';
import DarkPage from './page-types/darkPage';
import Embed from './embed/embed';
import EmbedCard from './cards/embedCard';
import EmbedVideo from './media/embedVideo';
import Event from './content-types/event/event';
import EventCard from './cards/eventCard';
import { SBGlobalHeader } from './storyblok/globalHeader';
import { SBGlobalHeaderPicker } from './storyblok/globalHeaderPicker';
import { SBGrid } from './storyblok/grid';
import { SBHeading } from './storyblok/heading';
import Hero from './composite/hero';
import IconCard from './cards/iconCard';
import Itinerary from './composite/itinerary';
import ItineraryItem from './composite/itineraryItem';
import LinkGroup from './navigation/linkGroup';
import LinkList from './simple/linkList';
import LocalFooter from './identity/localFooter';
import LocalFooterPicker from './identity/localFooterPicker';
import MainMenuGroup from './navigation/MainNav/mainMenuGroup';
import MainNav from './navigation/MainNav/mainNav';
import MainNavItem from './navigation/MainNav/mainNavItem';
import Masthead from './identity/masthead';
import MastheadPicker from './identity/mastheadPicker';
import NavItem from './navigation/navItem';
import Page from './page';
import Perk from './content-types/perk/perk';
import PerkCard from './cards/perkCard';
import PerkCardHorizontal from './cards/perkCardHorizontal';
import Poster from './composite/poster';
import Redirect from './redirect/Redirect';
import { SBSAAMainNav } from './storyblok/saaMainNav';
import { SBSAAMainMenuGroup } from './storyblok/saaMainMenuGroup';
import SearchFacet from './search/searchFacet';
import SearchField from './search/searchField';
import SearchPage from './page-types/searchPage';
import SearchPager from './search/searchPager';
import SearchResults from './search/searchResults';
import SearchSuggestions from './search/searchSuggestions';
import Section from './layout/section';
import SimpleImage from './media/simpleImage';
import Story from './content-types/story/story';
import StoryCard from './cards/storyCard';
import SaaStoryCard from './cards/saaStoryCard';
import { SBTripCard } from './storyblok/tripCard';
import { SBTsContentPicker } from './storyblok/tsContentPicker';
import { SBTsContentTemplate } from './storyblok/tsContentTemplate';
import TripFilterPage from './page-types/TripFilterPage/TripFilterPage';
import TripPage from './page-types/TripPage/TripPage';
import { SBUtilityNav } from './storyblok/utilityNav';
import VerticalNav from './navigation/verticalNav';
import VerticalNavWrapper from './navigation/verticalNavWrapper';
import VerticalNavItem from './navigation/verticalNavItem';
import Wysiwyg from './simple/wysiwyg';

const ComponentList = {
  accordion: Accordion,
  accordionItem: AccordionItem,
  alert: SBAlert,
  alertCtaLink: SBAlertCtaLink,
  basicCard: BasicCard,
  basicCardHorizontal: BasicCardHorizontal,
  basicPage: BasicPage,
  collectionCard: SBCollectionCard,
  collectionCardHorizontal: SBCollectionCardHorizontal,
  ctaButton: SBCtaButton,
  ctaCard: CtaCard,
  ctaLink: SBCtaLink,
  ctaGroup: CtaGroup,
  darkPage: DarkPage,
  embed: Embed,
  embedCard: EmbedCard,
  embedVideo: EmbedVideo,
  event: Event,
  eventCard: EventCard,
  globalHeader: SBGlobalHeader,
  globalHeaderPicker: SBGlobalHeaderPicker,
  grid: SBGrid,
  heading: SBHeading,
  hero: Hero,
  iconCard: IconCard,
  itinerary: Itinerary,
  itineraryItem: ItineraryItem,
  linkGroup: LinkGroup,
  linkList: LinkList,
  localFooter: LocalFooter,
  localFooterPicker: LocalFooterPicker,
  mainMenuGroup: MainMenuGroup,
  mainNav: MainNav,
  mainNavItem: MainNavItem,
  masthead: Masthead,
  mastheadPicker: MastheadPicker,
  navItem: NavItem,
  page: Page,
  perk: Perk,
  perkCard: PerkCard,
  perkCardHorizontal: PerkCardHorizontal,
  poster: Poster,
  redirect: Redirect,
  saaMainNav: SBSAAMainNav,
  saaMainMenuGroup: SBSAAMainMenuGroup,
  searchFacet: SearchFacet,
  searchField: SearchField,
  searchPage: SearchPage,
  searchPager: SearchPager,
  searchResults: SearchResults,
  searchSuggestions: SearchSuggestions,
  section: Section,
  simpleImage: SimpleImage,
  story: Story,
  storyCard: StoryCard,
  saaStoryCard: SaaStoryCard,
  trip: TripPage,
  tripCard: SBTripCard,
  tripFilterPage: TripFilterPage,
  tsContentPicker: SBTsContentPicker,
  tsContentTemplate: SBTsContentTemplate,
  utilityNav: SBUtilityNav,
  verticalNav: VerticalNav,
  verticalNavWrapper: VerticalNavWrapper,
  verticalNavItem: VerticalNavItem,
  wysiwyg: Wysiwyg,
};

const Components = (type) => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound;
  }
  return ComponentList[type];
};

export default Components;
