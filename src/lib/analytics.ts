export type AnalyticsEvent =
  | 'quickstart_page_viewed'
  | 'install_command_copied'
  | 'demo_started'
  | 'demo_completed'
  | 'starter_data_downloaded'
  | 'own_data_guide_opened'
  | 'integration_page_opened'
  | 'github_clicked'

export function track(event: AnalyticsEvent) {
  window.dispatchEvent(new CustomEvent('open4d:analytics', { detail: { event } }))
}
