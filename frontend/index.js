import explore from './explore.vue';
import './content';

export default {
  ref: 'content',
  name: 'Content',
  settingsLink: '/group/{groupId}/content/settings',
  routes: {
    content: {
      name: 'Content',
      entry: true,
      component: explore,
      path: '/group/{groupId}/content/:path?',
      icon: 'folder',
      visiblePerms: [
        '{groupId}.content.write',
        '{groupId}.group.update',
      ],
    },
    homepage: {
      name: 'Group Home',
      entry: true,
      component: explore,
      path: '/group/{groupId}/home/:path?',
      icon: 'home',
      meta: { parent: 'home' },
      ifEnrolledIs: true,
    },
  },
  store: {
    content: {
      state: {
        isOperationPending: false,
      },
      mutations: {
        unsetOperationPending(state) {
          state.isOperationPending = false;
        },
        setOperationPending(state) {
          state.isOperationPending = true;
        },
      },
    },
  },
};
