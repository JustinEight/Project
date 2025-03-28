export default class Navigator {
  static loadingRef: any;
  static toastDebugRef: any;
  static toastMsg: any;
  static isNetWork: boolean;

  static setLoadingRef(ref: any) {
    this.loadingRef = ref;
  }
  static setToastDebugRef(ref: any) {
    this.toastDebugRef = ref;
  }

  static setToastMsg(ref: any) {
    this.toastMsg = ref;
  }

  static setNetWork(ref: boolean) {
    this.isNetWork = ref;
  }

  static showToastMsg(params?: any) {
    this.toastMsg.show(params);
  }

  // Loading function
  static showLoading(message?: string) {
    this.loadingRef?.show(message);
  }

  static hideLoading() {
    this.loadingRef?.hide();
  }
}
