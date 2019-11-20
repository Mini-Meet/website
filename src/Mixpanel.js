import mixpanel from 'mixpanel-browser';

mixpanel.init('741a30e4e4ffc18f1e224dadcde34cc7');

const currentEnvironment = process.env.NODE_ENV === 'production';

const actions = {
  identify: id => {
    if (currentEnvironment) mixpanel.identify(id);
  },
  alias: id => {
    if (currentEnvironment) mixpanel.alias(id);
  },
  track: (name, props) => {
    if (currentEnvironment) mixpanel.track(name, props);
  },
  people: {
    set: props => {
      if (currentEnvironment) mixpanel.people.set(props);
    },
  },
};

export const Mixpanel = actions;
