export interface IWidget {
  name: string,
  position: 'left' | 'right' | 'top' | 'bottom',
}

export interface IStep {
  name: string,
  widgets: IWidget[],
}

export interface IConfig {
  tenantId: string,
  widgets?: IWidget[],
  steps?: IStep[],
}