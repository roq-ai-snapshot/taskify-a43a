const mapping: Record<string, string> = {
  calendars: 'calendar',
  organizations: 'organization',
  tasks: 'task',
  timesheets: 'timesheet',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
