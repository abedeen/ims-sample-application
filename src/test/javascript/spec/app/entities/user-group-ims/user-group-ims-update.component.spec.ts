/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { InventoryManagementSystemTestModule } from '../../../test.module';
import { UserGroupImsUpdateComponent } from 'app/entities/user-group-ims/user-group-ims-update.component';
import { UserGroupImsService } from 'app/entities/user-group-ims/user-group-ims.service';
import { UserGroupIms } from 'app/shared/model/user-group-ims.model';

describe('Component Tests', () => {
    describe('UserGroupIms Management Update Component', () => {
        let comp: UserGroupImsUpdateComponent;
        let fixture: ComponentFixture<UserGroupImsUpdateComponent>;
        let service: UserGroupImsService;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [InventoryManagementSystemTestModule],
                declarations: [UserGroupImsUpdateComponent]
            })
                .overrideTemplate(UserGroupImsUpdateComponent, '')
                .compileComponents();

            fixture = TestBed.createComponent(UserGroupImsUpdateComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(UserGroupImsService);
        });

        describe('save', () => {
            it(
                'Should call update service on save for existing entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new UserGroupIms(123);
                    spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.userGroup = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.update).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );

            it(
                'Should call create service on save for new entity',
                fakeAsync(() => {
                    // GIVEN
                    const entity = new UserGroupIms();
                    spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
                    comp.userGroup = entity;
                    // WHEN
                    comp.save();
                    tick(); // simulate async

                    // THEN
                    expect(service.create).toHaveBeenCalledWith(entity);
                    expect(comp.isSaving).toEqual(false);
                })
            );
        });
    });
});
