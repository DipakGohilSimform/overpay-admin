import { OverrideToken, AliasToken } from 'antd/es/theme/interface'

export const globalTokens: Partial<AliasToken> = {
  fontFamily: `"Manrope", sans-serif`,
  lineWidthFocus: 0,
  controlOutline: 'var(--primary-200)',
  controlOutlineWidth: 1,
  borderRadius: 2,
  colorPrimary: 'var(--primary-500)',
  colorPrimaryBg: 'var(--primary-50)',
  colorPrimaryBgHover: 'var(--primary-100)',
  colorPrimaryBorder: 'var(--primary-200)',
  colorPrimaryBorderHover: 'var(--primary-300)',
  colorPrimaryHover: 'var(--primary-300)',
  colorPrimaryActive: 'var(--primary-600)',
  colorPrimaryTextHover: 'var(--primary-400)',
  colorPrimaryText: 'var(--primary-500)',
  colorPrimaryTextActive: 'var(--primary-600)',
  colorText: 'var(--neutral-900)'
}

export const componentTokens: OverrideToken = {
  Button: {
    colorPrimaryBg: 'var(--primary-500)',
    colorPrimaryBgHover: 'var(--primary-100)',
    colorPrimaryBorder: 'var(--primary-500)',
    colorPrimaryBorderHover: 'var(--primary-100)',
    colorPrimaryHover: 'var(--primary-100)',
    colorPrimary: 'var(--primary-500)',
    colorPrimaryActive: 'var(--primary-100)',
    colorPrimaryTextHover: 'var(--primary-400)',
    colorPrimaryText: 'var(--primary-500)',
    colorPrimaryTextActive: 'var(--primary-600)',
    defaultBorderColor: 'var(--neutral-300)',
    defaultShadow: 'none',
    primaryShadow: 'none',
    fontSize: 16,
    fontWeight: 800,
    controlHeight: 48,
    controlHeightLG: 56,
    borderRadius: 12,
    borderRadiusLG: 12,
    defaultBg: 'transparent',
    defaultHoverColor: 'var(--neutral-0)',
    defaultHoverBorderColor: 'var(--neutral-500)',
    defaultHoverBg: 'transparent'
  },
  Select: {
    colorBorder: 'var(--neutral-300)',
    optionSelectedBg: 'var(--primary-500)',
    colorPrimaryBgHover: 'var(--primary-500)',
    colorPrimaryBorderHover: 'var(--neutral-500)',
    colorFillTertiary: 'var(--neutral-10)',
    colorText: 'var(--neutral-900)',
    borderRadius: 8,
    borderRadiusLG: 8,
    borderRadiusSM: 4,
    optionPadding: '6px 8px',
    colorBgContainer: 'var(--neutral-10)',
    selectorBg: 'var(--neutral-10)',
    colorBgElevated: 'var(--neutral-10)',
    optionSelectedColor: 'var(--white)'
  },
  Layout: {
    siderBg: 'var(--neutral-100)',
    headerBg: 'var(--neutral-10)',
    bodyBg: 'var(--neutral-10)',
    triggerBg: 'var(--primary-500)'
  },
  Menu: {
    colorBgBase: 'var(--neutral-50)',
    itemBg: 'var(--neutral-100)',
    itemSelectedColor: 'var(--white)',
    itemSelectedBg: 'var(--primary-500)',
    itemActiveBg: 'var(--neutral-200)',
    itemColor: 'var(--neutral-600)'
  },
  Modal: {
    borderRadiusLG: 16
  },
  Carousel: {
    dotActiveWidth: 24,
    dotWidth: 6,
    dotHeight: 6,
    dotGap: 6,
    dotOffset: 96
  },
  Divider: {
    colorSplit: 'var(--neutral-300)',
    colorText: 'var(--neutral-600)',
    fontSize: 16,
    textPaddingInline: 8
  },
  Input: {
    activeBorderColor: 'var(--neutral-600)',
    hoverBorderColor: 'var(--neutral-500)',
    colorBorder: 'var(--neutral-300)',
    colorText: 'var(--neutral-900)',
    colorTextPlaceholder: 'var(--neutral-500)',
    inputFontSize: 16,
    paddingBlock: 16,
    paddingInline: 16,
    borderRadius: 12,
    activeShadow: 'none',
    colorBgContainer: 'var(--neutral-10)'
  },
  Checkbox: {
    colorBorder: 'var(--neutral-300)',
    colorPrimary: 'var(--primary-500)',
    colorPrimaryHover: 'var(--primary-500)',
    colorText: 'var(--neutral-900)',
    controlInteractiveSize: 24,
    borderRadiusSM: 24,
    colorBgContainer: 'var(--neutral-50)'
  },
  Tag: {
    borderRadiusSM: 50
  },
  Switch: {
    colorPrimary: 'var(--primary-500)',
    colorPrimaryHover: 'var(--primary-500)',
    colorTextQuaternary: 'var(--neutral-200)',
    colorTextTertiary: 'var(--neutral-200)',
    trackHeight: 24,
    trackPadding: 3
  },
  Table: {
    rowHoverBg: 'var(--neutral-100)',
    headerBg: 'var(--neutral-50)',
    headerColor: 'var(--neutral-600)',
    headerSplitColor: 'var(--neutral-50)',
    headerSortActiveBg: 'var(--neutral-0)',
    headerSortHoverBg: 'var(--neutral-100)',
    rowSelectedBg: 'var(--neutral-100)',
    rowSelectedHoverBg: 'var(--neutral-100)',
    cellPaddingBlock: 28,
    cellPaddingInline: 28,
    cellFontSize: 16,
    rowExpandedBg: 'var(--neutral-100)'
  },
  Form: {
    labelFontSize: 12,
    labelColor: 'var(--neutral-600)'
  },
  DatePicker: {
    activeBorderColor: 'var(--primary-500)',
    hoverBorderColor: 'var(--primary-500)',
    colorBorder: 'var(--neutral-300)',
    colorBgElevated: 'var(--neutral-50)',
    colorBgTextActive: 'var(--neutral-900)'
  },
  Dropdown: {
    colorBgElevated: 'var(--neutral-100)'
  }
}
