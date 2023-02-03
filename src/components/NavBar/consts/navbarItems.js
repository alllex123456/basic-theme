import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import FunctionsIcon from '@mui/icons-material/Functions';
import EmailIcon from '@mui/icons-material/Email';
import Person2Icon from '@mui/icons-material/Person2';

export const mainNavbarItems = [
  {
    id: 0,
    icon: <PeopleIcon />,
    label: 'Authentication',
    route: 'authentication',
  },
  {
    id: 1,
    icon: <StorageIcon />,
    label: 'Database',
    route: 'database',
  },
  {
    id: 2,
    icon: <DesignServicesIcon />,
    label: 'Services',
    route: 'services',
  },
  {
    id: 3,
    icon: <FunctionsIcon />,
    label: 'Functions',
    route: 'functions',
  },
  {
    id: 4,
    icon: <EmailIcon />,
    label: 'Messages',
    route: 'messages',
  },
  {
    id: 5,
    icon: <Person2Icon />,
    label: 'User profile',
    route: 'profile',
  },
];
