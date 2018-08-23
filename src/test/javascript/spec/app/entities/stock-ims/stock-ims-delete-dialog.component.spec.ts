/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { InventoryManagementSystemTestModule } from '../../../test.module';
import { StockImsDeleteDialogComponent } from 'app/entities/stock-ims/stock-ims-delete-dialog.component';
import { StockImsService } from 'app/entities/stock-ims/stock-ims.service';

describe('Component Tests', () => {
    describe('StockIms Management Delete Component', () => {
        let comp: StockImsDeleteDialogComponent;
        let fixture: ComponentFixture<StockImsDeleteDialogComponent>;
        let service: StockImsService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [InventoryManagementSystemTestModule],
                declarations: [StockImsDeleteDialogComponent]
            })
                .overrideTemplate(StockImsDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(StockImsDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(StockImsService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
