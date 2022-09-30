import { BehaviorSubject } from 'rxjs';
import { SlidesComponent } from '../../../src/app/slides/slides.component';

describe('SlidesComponent', () => {
    let activatedRoute: any;
    let router: any;
    let slidesComponent: SlidesComponent;

    beforeEach(() => {
        activatedRoute = {
            firstChild: {
                snapshot: {
                    url: [
                        {
                            path: '8'
                        }
                    ]
                }
            }
        };

        router = {
            events: new BehaviorSubject('a fake router event'),
            navigate(): void {}, // eslint-disable-line @typescript-eslint/no-empty-function, no-empty-function
            routerState: {
                snapshot: {
                    root: {
                        queryParamMap: {
                            get() {
                                return 'a-fake-token';
                            }
                        }
                    }
                }
            }
        };

        spyOn(router, 'navigate').and.callThrough();

        slidesComponent = new SlidesComponent(activatedRoute, router, { nativeWindow: null });
    });

    describe('handleKeyUp()', () => {
        beforeEach(() => {
            slidesComponent.ngOnInit();
        });

        it('should navigate to the previous slide', () => {
            const keyboardEvent = new KeyboardEvent('keyup', { code: 'ArrowLeft' });

            slidesComponent.handleKeyUp(keyboardEvent);

            expect(router.navigate).toHaveBeenCalledWith(['7'], { queryParams: { token: 'a-fake-token' }, relativeTo: activatedRoute });
        });

        it('should navigate to the previous slide', () => {
            // @todo Constructing a real KeyboardEvent with a given keyCode seems to be impossible.
            slidesComponent.handleKeyUp(<KeyboardEvent>{ keyCode: 37 });

            expect(router.navigate).toHaveBeenCalledWith(['7'], { queryParams: { token: 'a-fake-token' }, relativeTo: activatedRoute });
        });

        it('should navigate to the next slide', () => {
            const keyboardEvent = new KeyboardEvent('keyup', { code: 'ArrowRight' });

            slidesComponent.handleKeyUp(keyboardEvent);

            expect(router.navigate).toHaveBeenCalledWith(['9'], { queryParams: { token: 'a-fake-token' }, relativeTo: activatedRoute });
        });

        it('should navigate to the next slide', () => {
            // @todo Constructing a real KeyboardEvent with a given keyCode seems to be impossible.
            slidesComponent.handleKeyUp(<KeyboardEvent>{ keyCode: 39 });

            expect(router.navigate).toHaveBeenCalledWith(['9'], { queryParams: { token: 'a-fake-token' }, relativeTo: activatedRoute });
        });
    });

    describe('handleSwipeLeft()', () => {
        beforeEach(() => {
            slidesComponent.ngOnInit();
        });

        it('should navigate to the next slide', () => {
            slidesComponent.handleSwipeLeft();

            expect(router.navigate).toHaveBeenCalledWith(['9'], { queryParams: { token: 'a-fake-token' }, relativeTo: activatedRoute });
        });
    });

    describe('handleSwipeRight()', () => {
        beforeEach(() => {
            slidesComponent.ngOnInit();
        });

        it('should navigate to the previous slide', () => {
            slidesComponent.handleSwipeRight();

            expect(router.navigate).toHaveBeenCalledWith(['7'], { queryParams: { token: 'a-fake-token' }, relativeTo: activatedRoute });
        });
    });
});
