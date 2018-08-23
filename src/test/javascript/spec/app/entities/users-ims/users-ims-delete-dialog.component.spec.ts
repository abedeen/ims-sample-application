/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { InventoryManagementSystemTestModule } from '../../../test.module';
import { UsersImsDeleteDialogComponent } from 'app/entities/users-ims/users-ims-delete-dialog.component';
import { UsersImsService } from 'app/entities/users-ims/users-ims.service';

describe('Component Tests', () => {
    describe('UsersIms Management Delete Component', () => {
        let comp: UsersImsDeleteDialogComponent;
        let fixture: ComponentFixture<UsersImsDeleteDialogComponent>;
        let service: UsersImsService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [InventoryManagementSystemTestModule],
                declarations: [UsersImsDeleteDialogComponent]
            })
                .overrideTemplate(UsersImsDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(UsersImsDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(UsersImsService);
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
